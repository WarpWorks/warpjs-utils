const testHelpers = require('@quoin/node-test-helpers');

const expect = testHelpers.expect;

describe("lib/cache/index", () => {
    let moduleToTest;

    beforeEach(() => {
        moduleToTest = testHelpers.rewire(require.resolve('./index'));
        // Empty cache between each test.
        moduleToTest.__set__('cache', { config: {}, urls: {} });
    });

    it("should expose an object", () => {
        expect(moduleToTest).to.be.an('object');
    });

    it("should set and find the url", () => {
        moduleToTest.set('/foo', { hello: 'world' });
        expect(moduleToTest.get('/foo')).to.deep.equal({ hello: 'world' });
    });

    it("should not have unknown url", () => {
        expect(moduleToTest.get('/foo')).to.be.undefined();
    });

    it("should not find unknown url", () => {
        expect(moduleToTest.has('/foo')).to.be.false();
    });
});
