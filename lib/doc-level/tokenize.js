const constants = require('./constants');

module.exports = (docLevel) => docLevel.split(constants.levelSeparator).map((token) => {
    const data = token.split(constants.keyValueSeparator);

    const key = data.shift();
    const value = data.join(constants.keyValueSeparator);

    return {
        [constants.dataKey]: key,
        [constants.dataValue]: value
    };
});
