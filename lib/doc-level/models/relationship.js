const debug = require('debug')('W2:warpjs-utils:lib/doc-level/models/relationship');

const constants = require('./../constants');
const firstLevel = require('./../first-level');
const WarpJSError = require('./../../error');

module.exports = {
    getData(persistence, relationship, instance, docLevel) {
        debug(`getData(): relationship=${relationship.name}`);
        debug(`getData(): instance=`, instance);
        debug(`getData(): docLevel=`, docLevel);
        const {type, value} = firstLevel(docLevel);

        switch (type) {
            case constants.TYPES.ENTITY:
                // Avoid cyclic
                const docLevelEntity = require('./entity');
                const targetEntity = relationship.getTargetEntity();

                switch (targetEntity.entityType) {
                    case 'Embedded':
                        return Promise.resolve()
                            .then(() => relationship.getTargetReferences(instance))
                            .then((relationships) => relationships.find((reference) => reference._id === value))
                            .then((reference) => docLevelEntity.getData(persistence, targetEntity, reference, docLevel.slice(1)))
                        ;

                    default:
                        throw new WarpJSError(`Unknown entityType=${targetEntity.entityType}`);
                }

            default:
                throw new WarpJSError(`TODO: implement relationship for ${constants.dataKey}=${type}.`);
        }
    }
};
