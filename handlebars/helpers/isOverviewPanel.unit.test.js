const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isOverviewPanel');

const expect = testHelpers.expect;

describe("handlebars/helpers/isOverviewPanel", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });
});
