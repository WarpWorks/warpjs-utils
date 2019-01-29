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

    resource.warpjsFeatures = warpjsPlugins.getPlugins().reduce(
        (memo, plugin) => plugin.type ? extend(memo, { [plugin.type]: true }) : memo,
        {}
    );

    if (resource.warpjsFeatures.session) {
        const sessionPlugin = warpjsPlugins.getPlugin(warpjsPlugins.RESERVED_PLUGIN_TYPES.SESSION);
        const isCasSSO = sessionPlugin.module.isCasSSO(sessionPlugin.config);
        resource.warpjsFeatures.isCasSSO = isCasSSO;

        resource.link('warpjsLogin', {
            href: RoutesInfo.expand('W2:plugin:session:login', {}),
            title: "Login"
        });
        resource.link('warpjsLogout', {
            href: RoutesInfo.expand('W2:plugin:session:logout', {}),
            title: "Logout"
        });
    }

    // Search feature?
    if (resource.warpjsFeatures.search) {
        const searchPlugin = warpjsPlugins.getPlugin(warpjsPlugins.RESERVED_PLUGIN_TYPES.SEARCH);
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
