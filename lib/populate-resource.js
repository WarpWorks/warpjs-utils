const extend = require('lodash/extend');

const warpjsPlugins = require('@warp-works/warpjs-plugins');

const cache = require('./cache');
const createResource = require('./create-resource');

module.exports = (req, resource, RoutesInfo) => {
    resource.copyrightYear = resource.copyrightYear || (new Date()).getFullYear();
    resource.warpjsUser = req.warpjsUser || null;

    const homepageUrl = RoutesInfo.expand('homepage', {}) || RoutesInfo.expand('W2:portal:homepage', {});
    if (homepageUrl) {
        resource.link('warpjsHomepage', {
            href: homepageUrl,
            title: "WarpJS Home Page"
        });
    }

    const feedbackUrl = RoutesInfo.expand('W2:portal:feedback', {});
    if (feedbackUrl) {
        resource.link('feedback', feedbackUrl);
    }

    // resource.link('warpjsLogo', {
    //     href: '/public/iic_images/IIC-logo-4.png', // FIXME: Static URL.
    //     title: '[IIC LOGO]'
    // });

    resource.link('warpjsLogin', {
        href: RoutesInfo.expand('W2:plugin:session:login', {}),
        title: "Login"
    });
    resource.link('warpjsLogout', {
        href: RoutesInfo.expand('W2:plugin:session:logout', {}),
        title: "Logout"
    });

    resource.link('topBanner', {
        href: '/public/logos/public-beta.svg', // FIXME: Static URL.
        title: "Public Beta"
    });

    if (resource.warpjsUser) {
        resource.link('userProfile', {
            title: "User's Profile",
            href: RoutesInfo.expand('entity', {
                type: resource.warpjsUser.type,
                id: resource.warpjsUser.id
            })
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
        (memo, plugin) => plugin.type ? extend(memo, { [plugin.type]: true }) : memo,
        {}
    );

    // Search feature?
    if (resource.warpjsFeatures.search) {
        const searchPlugin = warpjsPlugins.getPlugin(warpjsPlugins.RESERVED_PLUGIN_TYPES.SEARCH);
        const searchUrl = searchPlugin.module.getUrl();
        resource.link('search', searchUrl);
    }

    if (resource.warpjsFeatures.session) {
        const sessionPlugin = warpjsPlugins.getPlugin(warpjsPlugins.RESERVED_PLUGIN_TYPES.SESSION);

        if (sessionPlugin.module.isCasSSO) {
            const isCasSSO = sessionPlugin.module.isCasSSO(sessionPlugin.config);
            resource.warpjsFeatures.isCasSSO = isCasSSO;
        }
    }

    if (cache && cache.config && cache.config.headerItems && cache.config.headerItems.length) {
        resource.embed('headerItems', cache.config.headerItems.map((headerItem) => {
            const href = headerItem.href
                ? headerItem.href
                : headerItem.type && headerItem.id
                    ? RoutesInfo.expand('entity', headerItem)
                    : '';

            const headerItemResource = createResource(href, headerItem);

            if (req.originalUrl === headerItemResource._links.self.href) {
                headerItemResource.isCurrentPage = true;
            }

            return headerItemResource;
        }));
    }

    if (cache && cache.config && cache.config.analytics && cache.config.analytics.apiKey) {
        resource.analyticsApi = cache.config.analytics.apiKey;
    }
};
