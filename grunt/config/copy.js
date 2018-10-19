const path = require('path');

const expand = true;
const flatten = true;

const assetsFolder = 'assets';
const jsFolder = path.join(assetsFolder, 'js');
const cssFolder = path.join(assetsFolder, 'css');
const fontsFolder = path.join(assetsFolder, 'fonts');

const reactFolder = path.dirname(require.resolve('react/package.json'));
const reactDomFolder = path.dirname(require.resolve('react-dom/package.json'));

module.exports = {
    'jquery': {
        files: [{
            expand,
            flatten,
            dest: jsFolder,
            src: [
                'node_modules/jquery/dist/jquery.min.js'
            ]
        }]
    },

    'bootstrap': {
        files: [{
            expand,
            flatten,
            dest: jsFolder,
            src: [
                'node_modules/bootstrap/dist/js/bootstrap*.min*'
            ]
        }, {
            expand,
            flatten,
            dest: cssFolder,
            src: [
                'node_modules/bootstrap/dist/css/bootstrap*.min*'
            ]
        }, {
            expand,
            flatten,
            dest: fontsFolder,
            src: [
                'node_modules/bootstrap/fonts/*'
            ]
        }]
    },

    'font-awesome': {
        files: [{
            expand,
            flatten,
            dest: cssFolder,
            src: [
                'node_modules/font-awesome/css/font-awesome.min*'
            ]
        }, {
            expand,
            flatten,
            dest: fontsFolder,
            src: [
                'node_modules/font-awesome/fonts/*'
            ]
        }]
    },

    'toast': {
        files: [{
            expand,
            flatten,
            dest: jsFolder,
            src: [
                'node_modules/jquery-toast-plugin/dist/*.js'
            ]
        }, {
            expand,
            flatten,
            dest: cssFolder,
            src: [
                'node_modules/jquery-toast-plugin/dist/*.css'
            ]
        }]
    },

    'react': {
        files: [{
            expand,
            flatten,
            dest: jsFolder,
            src: [
                path.join(reactFolder, 'umd', 'react.production.min.js'),
                path.join(reactDomFolder, 'umd', 'react-dom.production.min.js')
            ]
        }]
    }
};
