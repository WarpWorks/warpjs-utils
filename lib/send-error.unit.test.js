const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./send-error');

const expect = testHelpers.expect;

describe("lib/send-error", () => {
    it("should expose a function with 4 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(4);
    });
});
