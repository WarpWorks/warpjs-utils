require('handlebars');
const testHelpers = require('@quoin/node-test-helpers');

const template = require('./page-portal.hbs');

const expect = testHelpers.expect;

describe("handlebars/partials/page-portal.hbs", () => {
    it.skip("should render with partials", () => {
        const html = template({});
        expect(html).to.be.empty();
    });
});
