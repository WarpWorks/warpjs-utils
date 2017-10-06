const Promise = require('bluebird');

const ensureHalHeader = require('./ensure-hal-header');

module.exports = ($, url) => new Promise((resolve, reject) => {
    const defaultSettings = {
        method: 'GET',
        success(data, textStatus, jqXHR) {
            resolve({data, textStatus, jqXHR});
        },
        error(jqXHR, textStatus, errorThrown) {
            resolve({
                error: {
                    textStatus,
                    errorThrown
                },
                data: jqXHR.responseJSON
            });
        }
    };

    if (url) {
        defaultSettings.url = url;
    }

    const settings = ensureHalHeader(defaultSettings);

    return $.ajax(settings);
});
