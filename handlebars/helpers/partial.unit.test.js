const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./partial');

const expect = testHelpers.expect;

describe("handlebars/helpers/partial", () => {
    it("should expose a function with 2 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(2);
    });
});
