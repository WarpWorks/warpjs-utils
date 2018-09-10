const byName = require('./by-name');
const getPosition = require('./get-position');

module.exports = (left, right) => {
    const leftPosition = getPosition(left);
    const rightPosition = getPosition(right);

    return (leftPosition === rightPosition)
        ? byName(left, right)
        : leftPosition - rightPosition
    ;
};
