const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isSeparator');

const expect = testHelpers.expect;

describe("handlebars/helpers/isSeparator", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should return false when not bind", () => {
        expect(moduleToTest()).to.be.false();
    });

    it("should return false when no type", () => {
        const instance = {};
        expect(moduleToTest.call(instance)).to.be.false();
    });

    it("should return false when type invalid", () => {
        const instance = { type: 'not-SeparatorPanelItem' };
        expect(moduleToTest.call(instance)).to.be.false();
    });

    it("should return true when type valid", () => {
        const instance = { type: 'SeparatorPanelItem' };
        expect(moduleToTest.call(instance)).to.be.true();
    });
});
