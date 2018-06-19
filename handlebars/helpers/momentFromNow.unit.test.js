const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./momentFromNow');

const expect = testHelpers.expect;

describe("handlebars/helpers/momentFromNow", () => {
    it("should expose a function with 1 param", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(1);
    });

    it("should display few seconds ago", () => {
        const timestamp = (new Date()).getTime() - 5000; // 5 sec ago
        expect(moduleToTest(timestamp)).to.equal("a few seconds ago");
    });

    it("should display a minute ago", () => {
        const timestamp = (new Date()).getTime() - 50000; // 50 sec ago
        expect(moduleToTest(timestamp)).to.equal("a minute ago");
    });
});
