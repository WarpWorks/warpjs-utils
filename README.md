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


## API

### .assetsFolder

Path to the folder containing the shared assets.

### .byPositionThenName(left, right)

Sort function that will order objects by their position, then name.


### .compareIDs(id1, id2)

Check if `id1` and `id2` are equivalent. This converts each param into string to
allow comparison of number and string values.


### .createResource(reqOrPath, data)

Create a HAL object. `reqOrPath` is either the controller's `req` object when we
want the `_links.self.href` to be defined by the current URL, or a string
(potentially empty) to point to a specific URL. `data` is an object containing
the HAL data. See [HAL](https://www.npmjs.com/package/hal) for more info about
the returned object.


### .documentReady($)

This method should be called by the portal pages or portal plugins in order to
enable the common UI event handlers. `$` is the jQuery object.


### .getCurrentPageHAL($, [url])

Get the HAL for the current page. If `url` is passed, it will be used instead of
the current page's URL.


### .getHandlebarsHelpersDir(), .getHandlebarsPartialsDir(), .getHandlebarsViewsDir()

Function to return the path where the handlebars elements are. To be used with
your webpack config or plugin apps to access common templates.


### .proxy


### .requirePartial(partialName)


### .sendError(req, res, RoutesInfo, err)


### .sendHal(req, res, resource, RoutesInfo, [status])

Returns the endpoint `resource` as a HAL payload. `status` will be `200` if not
defined.


### .sendIndex(res, title, bundles, cssFile)

### .toast.success($, text, [heading])

Toaster.

### .trace(level, arg1, arg2, arg3, arg4)


### .urlFormat(pathname, query)


### .WarpJSError


### .wrapWith406(res, format)

Make sure a `406` is returned to client to block invalid methods.
