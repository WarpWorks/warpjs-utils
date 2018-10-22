const path = require('path');

const filesConfig = require('./../files-config');

const assetsFolder = 'assets';
const jsFolder = path.join(assetsFolder, 'js');
const cssFolder = path.join(assetsFolder, 'css');
const fontsFolder = path.join(assetsFolder, 'fonts');

module.exports = {
    'jquery': {
        files: [
            filesConfig(jsFolder, [{ packageName: 'jquery', filePath: 'dist/jquery.min.js' }])
        ]
    },

    'bootstrap': {
        files: [
            filesConfig(jsFolder, [{ packageName: 'bootstrap', filePath: 'dist/js/bootstrap*.min*' }]),
            filesConfig(cssFolder, [{ packageName: 'bootstrap', filePath: 'dist/css/bootstrap*.min*' }]),
            filesConfig(fontsFolder, [{ packageName: 'bootstrap', filePath: 'fonts/*' }])
        ]
    },

    'font-awesome': {
        files: [
            filesConfig(cssFolder, [{ packageName: 'font-awesome', filePath: 'css/font-awesome.min*' }]),
            filesConfig(fontsFolder, [{ packageName: 'font-awesome', filePath: 'fonts/*' }])
        ]
    },

    'tinymce': {
        files: [
            filesConfig(jsFolder, [{ packageName: 'tinymce', filePath: 'tinymce*.js' }]),
            filesConfig(path.join(jsFolder, 'themes', 'modern'), [{ packageName: 'tinymce', filePath: 'themes/modern/*.js' }]),
            {
                expand: true,
                flatten: false,
                dest: jsFolder,
                cwd: path.dirname(require.resolve('tinymce/package.json')),
                src: [
                    'skins/**/*',
                    'themes/**/*',
                    'plugins/**/*'
                ]
            }
        ]
    },

    'toast': {
        files: [
            filesConfig(jsFolder, [{ packageName: 'jquery-toast-plugin', filePath: 'dist/*.js' }]),
            filesConfig(cssFolder, [{ packageName: 'jquery-toast-plugin', filePath: 'dist/*.css' }])
        ]
    },

    'react': {
        files: [
            filesConfig(jsFolder, [
                { packageName: 'react', filePath: 'umd/react.production.min.js' },
                { packageName: 'react-dom', filePath: 'umd/react-dom.production.min.js' },
                { packageName: 'react-bootstrap', filePath: 'dist/react-bootstrap.min.js' },
                { packageName: 'react-redux', filePath: 'dist/react-redux.min.js' },
                { packageName: 'redux', filePath: 'dist/redux.min.js' }
            ])
        ]
    }
};
