const Promise = require('bluebird');

const getCustomMessage = require('./get-custom-message');

module.exports = async (persistence, config, domain, keys) => {
    return Promise.reduce(
        keys,
        async (accumulator, key) => {
            const instance = await getCustomMessage(persistence, config, domain, key);
            accumulator[key] = instance;
            return accumulator;
        },
        {}
    );
};
