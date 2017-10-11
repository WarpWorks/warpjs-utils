require('handlebars');
const testHelpers = require('@quoin/node-test-helpers');

const template = require('./generic-modal-content.hbs');

const expect = testHelpers.expect;

describe("handlebars/partials/generic-modal-content.hbs", () => {
    it("should render", () => {
        const html = template({});
        expect(html).not.to.be.empty();
    });
});
