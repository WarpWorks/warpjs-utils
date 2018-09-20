const feedback = require('./feedback');
const login = require('./login');
const search = require('./search');

(($) => $(document).ready(() => {
    feedback($);
    login($);
    search($);
}))(jQuery);
