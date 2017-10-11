require('handlebars');
const testHelpers = require('@quoin/node-test-helpers');

const template = require('./footer-portal.hbs');

const expect = testHelpers.expect;

describe("handlebars/partials/footer-portal.hbs", () => {
    it("should render", () => {
        const html = template({});
        expect(html).not.to.be.empty();
    });
});
