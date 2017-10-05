const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isRelationshipPanelItem');

const expect = testHelpers.expect;

describe("handlebars/helpers/isRelationshipPanelItem", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });
});
