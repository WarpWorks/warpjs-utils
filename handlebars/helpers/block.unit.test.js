const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./block');

const expect = testHelpers.expect;

describe("handlebars/helpers/block", () => {
    it("should expose a function with 2 params", () => {
        expect(moduleToTest).to.be.a('function')
            .and.to.have.lengthOf(2);
    });
});
