const Promise = require('bluebird');

const template = require('./template.hbs');

module.exports = ($, customMessages, acceptCookies) => {
    if (customMessages && customMessages.PortalCookiePopup) {
        $('body').append(template({ customMessages }));

        $(document).on('click', '.warpjs-cookie-popup-container .warpjs-cookie-popup-info .warpjs-details-link', function(e) {
            $(this).closest('.warpjs-cookie-popup-container').toggleClass('warpjs-hide-details');
        });

        $(document).on('click', '.warpjs-cookie-popup-container .warpjs-cookie-popup-info .warpjs-accept-cookies', function(e) {
            return Promise.resolve()
                .then(() => window.WarpJS.proxy.post($, acceptCookies.href))
                .then(() => window.WarpJS.toast.success($, "Cookies accepted"))
                .then(() => $('.warpjs-cookie-popup-container').remove())
                .catch(() => window.WarpJS.toast.error($, "Issue confirming accept cookie"))
            ;
        });
    }
};
