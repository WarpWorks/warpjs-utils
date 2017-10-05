const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./debug');

const expect = testHelpers.expect;

describe("handlebars/helpers/debug", () => {
    it("should expose a function with 1 param", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(1);
    });
});
