const _ = require('lodash');
const warpjsPlugins = require('@warp-works/warpjs-plugins');

const constants = require('./constants');

module.exports = (req, res, resource, RoutesInfo, status) => {
    resource.copyrightYear = resource.copyrightYear || (new Date()).getFullYear();

    const homepageUrl = RoutesInfo.expand('homepage', {}) || RoutesInfo.expand('W2:homepage', {});
    if (homepageUrl) {
        resource.link('warpjsHomepage', {
            href: homepageUrl,
            title: "WarpJS Home Page"
        });
    }

    resource.warpjsUser = req.warpjsUser || null;

    // FIXME: Find a better way to detect plugins. These steps should probably
    // be put inside of the plugin itself.
    const loginUrl = RoutesInfo.expand('W2:plugin:session:login', {});
    if (loginUrl) {
        resource.link('warpjsLogin', {
            href: loginUrl,
            title: "Login"
        });
        resource.link('warpjsLogout', {
            href: RoutesInfo.expand('W2:plugin:session:logout', {}),
            title: "Logout"
        });
    }

    const mapBrowser = RoutesInfo.expand('W2:plugin:map:main', {});
    if (mapBrowser) {
        resource.link('mapBrowser', {
            href: mapBrowser,
            title: "Map Browser"
        });

        resource.link('mapBrowserImage', {
            // TODO: Cannot use this because tests will fail.
            // href: `${req.app.get('public-folder-path')}/iic_images/map-browser-icon.png`,
            href: `/public/iic_images/map-browser-icon.png`, // FIXME: iic rf
            title: "Map Browser"
        });
    }

    resource.warpjsFeatures = warpjsPlugins.getPlugins().reduce(
        (memo, plugin) => plugin.type ? _.extend(memo, {[plugin.type]: true}) : memo,
        {}
    );

    // Search feature?
    const searchPlugin = warpjsPlugins.getPlugin('search');
    if (searchPlugin) {
        const searchUrl = searchPlugin.module.getUrl();
        resource.link('search', searchUrl);
    }

    res.status(status || 200)
        .header('Content-Type', constants.HAL_CONTENT_TYPE)
        .send(resource.toJSON());
};
