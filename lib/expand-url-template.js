const urlTemplate = require('url-template');

module.exports = (templated, data) => urlTemplate.parse(templated || '').expand(data || {});
