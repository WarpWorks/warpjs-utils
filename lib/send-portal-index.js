const _ = require('lodash');
const warpjsPlugins = require('@warp-works/warpjs-plugins');

const cache = require('./cache');
const createResource = require('./create-resource');

function bundleMapping(res, bundle) {
    return (bundle.indexOf('/') === -1) ? `${res.app.get('static-url')}/app/${bundle}.min.js` : bundle;
}

module.exports = (req, res, RoutesInfo, title, bundles, cssFile) => {
    if (typeof bundles === 'string') {
        bundles = ['vendor', bundles].map((bundle) => bundleMapping(res, bundle));
    } else {
        bundles = bundles.map((bundle) => bundleMapping(res, bundle));
    }

    const resource = createResource('', {
        copyrightYear: (new Date()).getFullYear(),
        title,
        bundles,
        cssFile,
        baseUrl: res.app.get('base-url'),
        staticUrl: res.app.get('static-url'),
        warpjsUser: req.warpjsUser || null
    });

    const homepageUrl = RoutesInfo.expand('homepage', {}) || RoutesInfo.expand('W2:portal:homepage', {});
    if (homepageUrl) {
        resource.link('warpjsHomepage', {
            href: homepageUrl,
            title: "WarpJS Home Page"
        });
    }

    resource.link('warpjsLogo', {
        href: '/public/iic_images/IIC-logo-4.png',
        title: '[IIC LOGO]'
    });

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

    if (cache && cache.config && cache.config.headerItems && cache.config.headerItems.length) {
        resource.embed('headerItems', cache.config.headerItems.map((headerItem) => {
            const href = headerItem.type && headerItem.id ? RoutesInfo.expand('entity', headerItem) : '';
            return createResource(href, headerItem);
        }));
    }

    res.status(200).render('portal-index', resource.toJSON());
};
