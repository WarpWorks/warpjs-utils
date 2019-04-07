const _ = require('lodash');

module.exports = (item) => {
    if (_.isArray(item) || !_.isObject(item)) {
        return Number.MAX_SAFE_INTEGER;
    }

    let positionValue = item.relnPosition;
    let position = parseInt(positionValue, 10);

    if (_.isNaN(position)) {
        positionValue = item.position;
        position = parseInt(positionValue, 10);
    }

    if (_.isNaN(position)) {
        positionValue = item.Position;
        position = parseInt(positionValue, 10);
    }

    if (_.isNaN(position)) {
        return Number.MAX_SAFE_INTEGER;
    }

    if (position.toString() !== positionValue.toString()) {
        return Number.MAX_SAFE_INTEGER;
    }

    return position;
};
