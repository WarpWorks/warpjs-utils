const callWithBasicAjaxOptions = require('./call-with-basic-ajax-options');

module.exports = ($, url, data) => callWithBasicAjaxOptions($, 'PATCH', url, data);
