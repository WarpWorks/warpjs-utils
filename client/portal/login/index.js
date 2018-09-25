const Promise = require('bluebird');

const proxy = require('./../../../lib/proxy');
const toast = require('./../../../lib/toast');

function findInput($, form, fieldName) {
    return $(form).find(`input[name="${fieldName}"]`);
}

module.exports = ($) => {
    $(document).on('click', '[data-warpjs-action="toggle-login-form"]', function(e) {
        $('.warpjs-user-not-logged-in').toggleClass('show-login-form');
    });

    $(document).on('submit', 'form.warpjs-login-form[method][action]', function(e) {
        e.preventDefault();

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
            const  url = $(this).attr('action');

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
