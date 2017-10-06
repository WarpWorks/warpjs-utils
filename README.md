# WarpJS-utils

Utility library for WarpJS and plugins.

## Handlebars related

This package also contains the base views and templates for WarpJS.

    const warpjsUtils = require('@warp-works/warpjs-utils');

    app.set('view engine', 'hbs');
    app.set('views', warpjsUtils.getHandlebarsViewsDir());

In `webpack`, you can define these for the helpers:

    {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
            helperDirs: [
                warpjsUtils.getHandlebarsHelpersDir(),
            ],
            partialDirs: [
                warpjsUtils.getHandlebarsPartialsDir(),
            ]
        }
    }
