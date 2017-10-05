const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isPropertyTypeText');

const expect = testHelpers.expect;

describe("handlebars/helpers/isPropertyTypeText", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });
});
