const _ = require('lodash');

module.exports = (item) => {
    if (_.isArray(item) || !_.isObject(item)) {
        return Number.MAX_SAFE_INTEGER;
    }

    const positionValue = !_.isUndefined(item.relnPosition) && !_.isNull(item.relnPosition)
        ? item.relnPosition
        : !_.isUndefined(item.position)
            ? item.position
            : item.Position
    ;
    const position = parseInt(positionValue, 10);

    if (_.isNaN(position)) {
        return Number.MAX_SAFE_INTEGER;
    }

    if (position.toString() !== positionValue.toString()) {
        return Number.MAX_SAFE_INTEGER;
    }

    return position;
};
