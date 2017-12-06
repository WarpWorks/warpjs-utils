const packageJson = require('./../../package.json');

module.exports = {
    build: {
        src: [
            'assets'
        ]
    },

    test: {
        src: [
            '.nyc_output',
            'reports'
        ]
    },

    pack: {
        src: [
            `${packageJson.name.replace('@', '').replace('/', '-')}-*.tgz`
        ]
    }
};
