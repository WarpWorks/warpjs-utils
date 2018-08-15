const _ = require('lodash');

const DEFAULT_NAME_VALUE = '';
const DEFAULT_POSITION_VALUE = 9999;

function getPosition(item) {
    if (_.isArray(item) || !_.isObject(item)) {
        return DEFAULT_POSITION_VALUE;
    }

    const positionValue = _.isUndefined(item.position) ? item.Position : item.position;
    const position = parseInt(positionValue, 10);

    if (_.isNaN(position)) {
        return DEFAULT_POSITION_VALUE;
    }

    if (position.toString() !== positionValue.toString()) {
        return DEFAULT_POSITION_VALUE;
    }

    return position;
}

function getName(item) {
    if (_.isArray(item) || !_.isObject(item)) {
        return DEFAULT_NAME_VALUE;
    }

    return (item.Name || item.name || '').trim();
}

module.exports = (left, right) => {
    const leftPosition = getPosition(left);
    const rightPosition = getPosition(right);

    return (leftPosition === rightPosition)
        ? getName(left).localeCompare(getName(right))
        : leftPosition - rightPosition;
};
