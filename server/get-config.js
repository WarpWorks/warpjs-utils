const rc = require('@quoin/node-rc');

module.exports = (packageJson, baseConfig) => rc(packageJson.name, baseConfig, {
    serverVersion: packageJson.version,
    serverStarted: (new Date()).toString()
});
