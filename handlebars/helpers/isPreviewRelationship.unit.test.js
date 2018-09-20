const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isPreviewRelationship');

const expect = testHelpers.expect;

describe("handlebars/helpers/isPreviewRelationship", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should recognize with correct type", () => {
        expect(moduleToTest.call({ style: 'Preview' })).to.be.true();
    });

    it("should not recognize with wrong type", () => {
        expect(moduleToTest.call({ style: 'Not Preview' })).to.be.false();
    });
});
