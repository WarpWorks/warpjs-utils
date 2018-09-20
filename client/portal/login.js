const Promise = require('bluebird');

const proxy = require('./../../lib/proxy');
const toast = require('./../../lib/toast');

function findInput($, element, fieldName) {
    return $(element).closest('.warpjs-login-form').find(`input[name="${fieldName}"]`);
}

module.exports = ($) => {
    $(document).on('click', '.page--top .warpjs-user-not-logged-in .warpjs-login-button', function(e) {
        $(this).closest('.warpjs-user-not-logged-in').toggleClass('show-login-form');
    });

    $(document).on('click', '.page--top .warpjs-user-not-logged-in [data-warpjs-action="cancel"]', function(e) {
        $(this).closest('.warpjs-user-not-logged-in').toggleClass('show-login-form');
    });

    $(document).on('click', '.page--top .warpjs-user-not-logged-in [data-warpjs-action="log-in"]', function(e) {
        const url = $(this).closest('.warpjs-login-form').data('warpjsUrl');
        const data = {
            username: findInput($, this, 'username').val(),
            password: findInput($, this, 'password').val()
        };

        if (!data.username) {
            toast.warning($, data.password ? "Missing username." : "Missing username and password.");
            findInput($, this, 'username').focus();
        } else if (!data.password) {
            toast.warning($, "Missing password.");
            findInput($, this, 'password').focus();
        } else {
            return Promise.resolve()
                .then(() => proxy.post($, url, data))
                .then((res) => document.location.reload())
                .catch(() => {
                    toast.error($, "Authentication error", "Failed");
                    findInput($, this, 'username').focus();
                })
            ;
        }
    });
};
