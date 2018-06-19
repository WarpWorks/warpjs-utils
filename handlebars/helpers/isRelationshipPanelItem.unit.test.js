const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isRelationshipPanelItem');

const expect = testHelpers.expect;

describe("handlebars/helpers/isRelationshipPanelItem", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should return false if not bind", () => {
        expect(moduleToTest()).to.be.false();
    });

    it("should return false if wrong type", () => {
        const instance = { type: 'not-RelationshipPanelItem' };
        expect(moduleToTest.call(instance)).to.be.false();
    });

    it("should return true if correct type", () => {
        const instance = { type: 'RelationshipPanelItem' };
        expect(moduleToTest.call(instance)).to.be.true();
    });
});
