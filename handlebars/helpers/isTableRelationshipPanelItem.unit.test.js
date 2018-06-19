const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isTableRelationshipPanelItem');

const expect = testHelpers.expect;

describe("handlebars/helpers/isTableRelationshipPanelItem", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should return false when not bind", () => {
        expect(moduleToTest.call()).to.be.false();
    });

    it("should return false when no style", () => {
        const instance = {};
        expect(moduleToTest.call(instance)).to.be.false();
    });

    it("should return false when style invalid", () => {
        const instance = { style: 'not-Table' };
        expect(moduleToTest.call(instance)).to.be.false();
    });

    it("should return true when style valid", () => {
        const instance = { style: 'Table' };
        expect(moduleToTest.call(instance)).to.be.true();
    });
});
