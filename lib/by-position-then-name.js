module.exports = (left, right) => {
    const leftPosition = (left.Position === 0) ? 0
        : (left.Position) ? left.Position
        : (left.position === 0) ? 0
        : (left.position) ? left.position
        : 9999;

    const rightPosition = (right.Position === 0) ? 0
        : (right.Position) ? right.Position
        : (right.position === 0) ? 0
        : (right.position) ? right.position
        : 9999;

    return (leftPosition === rightPosition)
        ? (left.name || '').trim().localeCompare((right.name || '').trim())
        : leftPosition - rightPosition;
};
