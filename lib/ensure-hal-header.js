const constants = require('./constants');

module.exports = (settings) => {
    if (!settings.headers) {
        settings.headers = {};
    }
    settings.headers.Accept = constants.HAL_CONTENT_TYPE;

    if (!settings.dataType) {
        settings.dataType = 'json';
    }

    return settings;
};
