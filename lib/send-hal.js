const constants = require('./constants');

module.exports = (req, res, resource, RoutesInfo, status) => {
    resource.copyrightYear = resource.copyrightYear | (new Date()).getFullYear();

    resource.link('warpjsHomepage', {
        href: '/', // FIXME: use RoutesInfo
        title: "WarpJS Home Page"
    });

    // FIXME: Should only have this if the plugin is added.
    const mapBrowser = RoutesInfo.expand('W2:plugin:map:main');
    if (mapBrowser) {
        resource.link('mapBrowser', {
            href: mapBrowser,
            title: "Map Browser"
        });
    }

    resource.user = req.i3cUser; // FIXME: remove i3c reference.
    resource.warpjsUser = req.warpjsUser || null;

    if (resource.hideLoginHeader) {
        // This is the login page, so we want to be sure that
        // both links are available.
        // resource.link('i3c_login', {
        //     href: RoutesInfo.expand('login'),
        //     title: "Login"
        // });
        // resource.link('warpjs:session:logout', {
        //     href: RoutesInfo.expand('logout'),
        //     title: "Logout"
        // });
    } else if (req.i3cUser) {
        // resource.link('warpjs:session:logout', {
        //     href: RoutesInfo.expand('logout'),
        //     title: "Logout"
        // });
    } else {
        // resource.link('i3c_login', {
        //     href: RoutesInfo.expand('login'),
        //     title: "Login"
        // });
    }

    // resource.link('mapBrowser', {
    //     href: RoutesInfo.expand('map'),
    //     title: "Map Browser"
    // });
    resource.link('mapBrowserImage', {
        // TODO: Cannot use this because tests will fail.
        // href: `${req.app.get('public-folder-path')}/iic_images/map-browser-icon.png`,
        href: `/public/iic_images/map-browser-icon.png`, // FIXME: iic rf
        title: "I3C Map"
    });

    res.status(status || 200)
        .header('Content-Type', constants.HAL_CONTENT_TYPE)
        .send(resource.toJSON());
};
