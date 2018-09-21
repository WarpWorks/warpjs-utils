const path = require('path');

const constants = require('./../../lib/constants.js');

module.exports = Object.freeze({
    options: {
        compress: true
    },

    portal: {
        dest: path.join(constants.folders.assets, 'css', constants.assets.portal.css),
        src: 'client/portal/style.less'
    },
    content: {
        dest: path.join(constants.folders.assets, 'css', constants.assets.content.css),
        src: 'client/content/style.less'
    },
    studio: {
        dest: path.join(constants.folders.assets, 'css', constants.assets.studio.css),
        src: 'client/studio/style.less'
    }
});
