const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./momentLongFormat');

const expect = testHelpers.expect;

describe("handlebars/helpers/momentLongFormat", () => {
    it("should expose a function with 1 param", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(1);
    });

    it("should return a string", () => {
        const timestamp = (new Date()).getTime() - 5000; // 5 sec ago
        expect(moduleToTest(timestamp)).to.be.a('string');
    });
});
