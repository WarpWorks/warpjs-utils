const _ = require('lodash');

const basicAjaxOptions = require('./basic-ajax-options');

module.exports = ($, method, url, data) => Promise.resolve()
    .then(() => $.ajax(_.extend({}, basicAjaxOptions, {
        method,
        url,
        data: data ? JSON.stringify(data, null, 2) : undefined
    })))
;
