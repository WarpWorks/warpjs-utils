const getConfig = require('./get-config');
const getCustomMessage = require('./get-custom-message');
const getCustomMessages = require('./get-custom-messages');

module.exports = Object.freeze({
    getConfig: (packageJson, baseConfig) => getConfig(packageJson, baseConfig),
    getCustomMessage: (persistence, config, domain, key) => getCustomMessage(persistence, config, domain, key),
    getCustomMessages: (persistence, config, domain, keys) => getCustomMessages(persistence, config, domain, keys)
});
