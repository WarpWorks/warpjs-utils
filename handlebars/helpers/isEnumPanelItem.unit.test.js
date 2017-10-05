const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isEnumPanelItem');

const expect = testHelpers.expect;

describe("handlebars/helpers/EnumPanelItem", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest)
            .to.be.a('function')
            .and.to.have.lengthOf(0);
    });

    it("should return true for 'EnumPanelItem'", () => {
        const context = {
            type: 'EnumPanelItem'
        };

        expect(moduleToTest.call(context)).to.be.true();
    });

    it("should return false for not 'EnumPanelItem'", () => {
        const context = {
            type: 'foo'
        };

        expect(moduleToTest.call(context)).to.be.false();
    });
});
