const getConfig = require('./get-config');
const getCustomMessage = require('./get-custom-message');
const getCustomMessages = require('./get-custom-messages');
const getCustomMessagesByPrefix = require('./get-custom-messages-by-prefix');

module.exports = Object.freeze({
    getConfig: (packageJson, baseConfig) => getConfig(packageJson, baseConfig),
    getCustomMessage: (persistence, config, domain, key) => getCustomMessage(persistence, config, domain, key),
    getCustomMessages: (persistence, config, domain, keys) => getCustomMessages(persistence, config, domain, keys),
    getCustomMessagesByPrefix: (persistence, config, domain, prefix) => getCustomMessagesByPrefix(persistence, config, domain, prefix)
});
