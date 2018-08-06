const hbs = require('hbs');
const hbsUtils = require('hbs-utils')(hbs);

const getHandlebarsPartialsDir = require('./../lib/get-handlebars-partials-dir');
const getHandlebarsViewsDir = require('./../lib/get-handlebars-views-dir');

let initialized = false;

function init() {
    if (!initialized) {
        const handlebarsPartialsDir = getHandlebarsPartialsDir();
        hbsUtils.registerWatchedPartials(
            handlebarsPartialsDir,
            {
                precompile: true,
                name: (template) => template.replace(/_/g, '-'),
                done: () => {
                    initialized = true;
                }
            }
        );
    }
}

module.exports = (app) => {
    app.set('view engine', 'hbs');
    app.set('views', getHandlebarsViewsDir());

    init();
};
