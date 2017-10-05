# WarpJS-utils

Utility library for WarpJS and plugins.

This package also contains the base views and templates for WarpJS.

    const warpjsUtils = require('@warp-works/warpjs-utils');

    app.set('view engine', 'hbs');
    app.set('views', warpjsUtils.getHandlebarsViewsDir());

In `webpack`, you can define these for the helpers:

    const utilsRoot = path.dirname(require.resolve('@warp-works/warpjs-utils/package.json'));

    ...

    {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
            helperDirs: [
                path.join(utilsRoot, 'handlebars', 'helpers')
            ],
            partialDirs: [
                path.join(utilsRoot, 'handlebars', 'partials')
            ]
        }
    }
