module.exports = function() {
    return Boolean(
        this.mapMatrix
        && this.mapMatrix.subColumnHeaders
        && this.mapMatrix.subColumnHeaders.length
        && this.mapMatrix.subRows
        && this.mapMatrix.subRows.length
    );
};
