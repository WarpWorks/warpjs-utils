const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./error');

const expect = testHelpers.expect;

describe("lib/error", () => {
    it("should expose a class", () => {
        expect(moduleToTest).to.be.a('function').to.have.property('name');
        expect(moduleToTest.name).to.equal('WarpJSError');
    });
});
