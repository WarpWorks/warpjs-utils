const Promise = require('bluebird');

const cache = require('./../cache');
const callWithBasicAjaxOptions = require('./call-with-basic-ajax-options');

module.exports = ($, url, overrideCache) => Promise.resolve()
    .then(() => (overrideCache || !cache.has(url))
        ? Promise.resolve()
            .then(() => callWithBasicAjaxOptions($, 'GET', url))
            .then((res) => cache.set(url, res))
        : null
    )
    .then(() => cache.get(url))
    .catch(() => {
        throw new Error(`Cannot GET ${url}.`);
    });
;
