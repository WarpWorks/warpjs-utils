const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./trace');

const expect = testHelpers.expect;

describe("lib/trace", () => {
    it("should expose a function with 5 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(5);
    });
});
