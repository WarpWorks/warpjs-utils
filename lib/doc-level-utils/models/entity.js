// const debug = require('debug')('W2:warpjs-utils:lib/doc-level/models/entity');
const Promise = require('bluebird');

const constants = require('./../constants');
const firstLevel = require('./../first-level');
const WarpJSError = require('./../../error');

module.exports = {
    getData(persistence, entity, instance, docLevel) {
        // debug(`getData(): entity=${entity.name}`);
        // debug(`getData(): instance=`, instance);
        // debug(`getData(): docLevel=`, JSON.stringify(docLevel, null, 2));

        const first = firstLevel(docLevel);

        if (first) {
            const {type, value} = first;

            // debug(`getData(): type=${type}; value=${value}`);

            switch (type) {
                case constants.TYPES.BASIC:
                    return Promise.resolve()
                        .then(() => entity.getBasicProperties().find((bp) => bp.name === value))
                        .then((model) => ({ model, instance }))
                    ;

                case constants.TYPES.RELATIONSHIP:
                    // Avoid cyclic.
                    // debug(`getData():     is a relationship`);
                    const docLevelRelationship = require('./relationship');
                    return Promise.resolve()
                        .then(() => entity.getRelationshipByName(value))
                        .then((relationship) => docLevelRelationship.getData(persistence, relationship, instance, docLevel.slice(1)))
                    ;

                default:
                    throw new WarpJSError(`TODO: implement entity for ${constants.dataKey}=${type}.`);
            }
        } else {
            // It's the last element.
            return {
                model: entity,
                instance
            };
        }
    }
};
