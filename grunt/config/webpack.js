const getHandlebarsHelpersDir = require('./../../lib/get-handlebars-helpers-dir');
const getHandlebarsPartialsDir = require('./../../lib/get-handlebars-partials-dir');
const path = require('path');
const webpack = require('webpack');
const WebpackVisualizer = require('webpack-visualizer-plugin');

const constants = require('./../../lib/constants');

const rootDir = path.dirname(require.resolve('./../../package.json'));

module.exports = Object.freeze({
    build: {
        target: 'web',
        entry: {
            [constants.entryPoints.portal]: './client/portal/index.js'
        },
        externals: {
            jquery: true
        },
        node: {
            fs: 'empty'
        },
        output: {
            path: path.join(rootDir, constants.folders.assets, 'js'),
            filename: '[name].min.js'
        },
        plugins: [
            new WebpackVisualizer(),
            new webpack.optimize.UglifyJsPlugin({
                compress: false,
                output: {
                    ascii_only: true
                }
            })
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader',
                    query: {
                        helperDirs: [
                            getHandlebarsHelpersDir()
                        ],
                        partialDirs: [
                            getHandlebarsPartialsDir()
                        ]
                    }
                }
            ]
        }
    }
});
