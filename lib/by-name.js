const _ = require('lodash');

const DEFAULT_NAME_VALUE = '';

function getName(item) {
    if (_.isArray(item) || !_.isObject(item)) {
        return DEFAULT_NAME_VALUE;
    }

    return (item.Name || item.name || '').trim();
}

module.exports = (left, right) => getName(left).localeCompare(getName(right));
