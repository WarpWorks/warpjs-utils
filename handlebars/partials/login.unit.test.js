require('handlebars');
const testHelpers = require('@quoin/node-test-helpers');

const template = require('./login.hbs');

const expect = testHelpers.expect;

describe("handlebars/partials/login.hbs", () => {
    it("should render empty when no 'warpjsUser'", () => {
        const html = template({});
        expect(html).to.be.empty();
    });

    it("should render something when 'warpjsUser' is defined", () => {
        const html = template({ warpjsUser: {} });
        expect(html).not.to.be.empty();
    });
});
