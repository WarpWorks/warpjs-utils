require('handlebars');
const testHelpers = require('@quoin/node-test-helpers');

const template = require('./error-portal.hbs');

const expect = testHelpers.expect;

describe("handlebars/partials/error-portal.hbs", () => {
    it.skip("should render", () => {
        const html = template({});
        expect(html).not.to.be.empty();
    });
});
