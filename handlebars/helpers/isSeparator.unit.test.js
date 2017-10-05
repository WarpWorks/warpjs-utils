const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isSeparator');

const expect = testHelpers.expect;

describe("handlebars/helpers/isSeparator", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });
});
