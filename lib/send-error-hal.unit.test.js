const testHelpers = require('@quoin/node-test-helpers');

const expect = testHelpers.expect;
const proxyquire = testHelpers.proxyquire.noCallThru().noPreserveCache();

describe("lib/send-error-hal", () => {
    const output = {
        error: testHelpers.spy(),
        info: testHelpers.spy(),
        log: testHelpers.spy(),
        warn: testHelpers.spy()
    };

    const moduleToTest = proxyquire(require.resolve('./send-error-hal'), {
        './output': output
    });

    it("should expose a function", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(6);
    });

    it("should throw if 'err' is not defined", () => {
        expect(() => moduleToTest()).to.throw();
    });
});
