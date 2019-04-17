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
        devtool: 'source-map',
        entry: {
            [constants.entryPoints.portal]: './client/portal/index.js',
            [constants.entryPoints.content]: './client/content/index.js',
            [constants.entryPoints.studio]: './client/studio/index.js'
        },
        externals: {
            'jquery': 'jQuery',
            'tinymce': 'tinyMCE',
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react-bootstrap': 'ReactBootstrap',
            'react-redux': 'ReactRedux'
        },
        node: {
            fs: 'empty'
        },
        output: {
            path: path.join(rootDir, constants.folders.assets, 'js'),
            filename: '[name].min.js'
        },
        resolve: {
            extensions: [ '.jsx', '.js' ]
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production',
                DEBUG: false
            }),

            new WebpackVisualizer({
                filename: './../../reports/webpack-visualizer.html'
            }),

            new webpack.optimize.UglifyJsPlugin({
                compress: false,
                sourceMap: true,
                output: {
                    ascii_only: true
                }
            })
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
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
