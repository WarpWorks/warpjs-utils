const _ = require('lodash');

const byName = require('./by-name');

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

module.exports = (left, right) => {
    const leftPosition = getPosition(left);
    const rightPosition = getPosition(right);

    return (leftPosition === rightPosition)
        ? byName(left, right)
        : leftPosition - rightPosition;
};
