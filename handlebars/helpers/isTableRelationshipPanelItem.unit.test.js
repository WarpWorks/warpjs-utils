const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isTableRelationshipPanelItem');

const expect = testHelpers.expect;

describe("handlebars/helpers/isTableRelationshipPanelItem", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });
});