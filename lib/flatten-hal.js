const cloneDeep = require('lodash/cloneDeep');
const forEach = require('lodash/forEach');
const isObject = require('lodash/isObject');
const omit = require('lodash/omit');

const flatten = (hal) => {
    if (!isObject(hal)) {
        throw new Error("Invalid HAL object.");
    }

    const clone = cloneDeep(omit(hal, [ '_embedded' ]));

    forEach(hal._embedded, (values, key) => {
        if (clone[key]) {
            throw new Error(`Duplicate _embedded.${key} key.`);
        }
        clone[key] = values.map((value) => flatten(value));
    });

    return clone;
};

module.exports = flatten;
