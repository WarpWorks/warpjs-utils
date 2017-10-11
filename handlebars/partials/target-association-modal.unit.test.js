require('handlebars');
const testHelpers = require('@quoin/node-test-helpers');

const template = require('./target-association-modal.hbs');

const expect = testHelpers.expect;

describe("handlebars/partials/target-association-modal.hbs", () => {
    it("should render", () => {
        const html = template({});
        expect(html).not.to.be.empty();
    });
});
