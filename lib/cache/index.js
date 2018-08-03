const _ = require('lodash');

const cache = {
    config: {},
    urls: {}
};

module.exports = {
    get(url) {
        return _.cloneDeep(cache.urls[url]);
    },

    set(url, value) {
        cache.urls[url] = value;
        return this;
    },

    has(url) {
        return !!cache.urls[url];
    },

    setConfig(config) {
        cache.config = Object.freeze(_.cloneDeep(config));
    },

    get config() {
        return cache.config;
    }
};
