require('handlebars');
const testHelpers = require('@quoin/node-test-helpers');

const template = require('./navbar-content.hbs');

const expect = testHelpers.expect;

describe("handlebars/partials/navbar-content.hbs", () => {
    it.skip("should render", () => {
        const html = template({});
        expect(html).not.to.be.empty();
    });
});
