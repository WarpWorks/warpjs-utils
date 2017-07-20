const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./url-format');

const expect = testHelpers.expect;

describe("lib/url-format", () => {
    it("should expose a function with 2 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(2);
    });

    it("should work without params", () => {
        const value = moduleToTest();
        expect(value).to.equal('');
    });

    it("should return path if no query", () => {
        const value = moduleToTest('/some/path');
        expect(value).to.equal('/some/path');
    });

    it("should return correct url with one query param", () => {
        const value = moduleToTest('/some/path', {hello: 'world'});
        expect(value).to.equal('/some/path?hello=world');
    });

    it("should return correct url with two query params", () => {
        const value = moduleToTest('/some/path', {hello: 'world', foo: 'bar'});
        expect(value).to.equal('/some/path?hello=world&foo=bar');
    });
});
