const extend = require('lodash/extend');
const warpjsPlugins = require('@warp-works/warpjs-plugins');

const bundleMapping = require('./bundle-mapping');
const cache = require('./cache');
const constants = require('./constants');
const createResource = require('./create-resource');

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
        coreUrl: RoutesInfo.expand('W2:app:core', {}),
        warpjsUser: req.warpjsUser || null
    });

    resource.link('topBanner', {
        href: '/public/logos/public-beta.svg', // FIXME: Static URL.
        title: "Public Beta"
    });

    const homepageUrl = RoutesInfo.expand('homepage', {}) || RoutesInfo.expand('W2:portal:homepage', {});
    if (homepageUrl) {
        resource.link('warpjsHomepage', {
            href: homepageUrl,
            title: "WarpJS Home Page"
        });
    }

    resource.link('warpjsLogo', {
        href: '/public/iic_images/IIC-logo-4.png', // FIXME: Static URL.
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

    resource.warpjsFeatures = warpjsPlugins.getPlugins().reduce(
        (memo, plugin) => plugin.type ? extend(memo, { [plugin.type]: true }) : memo,
        {}
    );

    // Search feature?
    const searchPlugin = warpjsPlugins.getPlugin(warpjsPlugins.RESERVED_PLUGIN_TYPES.SEARCH);
    if (searchPlugin) {
        const searchUrl = searchPlugin.module.getUrl();
        resource.link('search', searchUrl);
    }

    if (cache && cache.config && cache.config.headerItems && cache.config.headerItems.length) {
        resource.embed('headerItems', cache.config.headerItems.map((headerItem) => {
            if (headerItem.href) {
                return createResource(headerItem.href, headerItem);
            } else {
                const href = headerItem.type && headerItem.id ? RoutesInfo.expand('entity', headerItem) : '';
                return createResource(href, headerItem);
            }
        }));
    }

    if (cache && cache.config && cache.config.analytics && cache.config.analytics.apiKey) {
        resource.analyticsApi = cache.config.analytics.apiKey;
    }

    // warpjs-utils' assets.
    resource.link('warpjsUtilsCss', constants.assets.portal.css);
    resource.link('warpjsUtilsJs', constants.assets.portal.js);

    const feedbackUrl = RoutesInfo.expand('W2:portal:feedback', {});
    if (feedbackUrl) {
        resource.link('feedback', feedbackUrl);
    }

    res.status(200).render('portal-index', resource.toJSON());
};
