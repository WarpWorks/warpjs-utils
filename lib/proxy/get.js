const Promise = require('bluebird');

const cache = require('./../cache');
const constants = require('./../constants');

module.exports = ($, url, overrideCache) => {
    return Promise.resolve()
        .then(() => {
            if (overrideCache || !cache.has(url)) {
                const ajaxOptions = {
                    method: 'GET',
                    url,
                    headers: {
                        accept: constants.HAL_CONTENT_TYPE
                    }
                };

                return Promise.resolve()
                    .then(() => $.ajax(ajaxOptions))
                    .then((res) => cache.set(url, res))
                ;
            }
        })
        .then(() => cache.get(url))
        .catch(() => {
            throw new Error(`Cannot GET ${url}.`);
        });
};
