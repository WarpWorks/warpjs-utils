const constants = require('./../constants');

module.exports = {
    headers: {
        'Accept': constants.HAL_CONTENT_TYPE,
        'Content-Type': 'application/json'
    },
    dataType: 'json'
};
