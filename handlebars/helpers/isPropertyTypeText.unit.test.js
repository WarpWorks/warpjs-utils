const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isPropertyTypeText');

const expect = testHelpers.expect;

describe("handlebars/helpers/isPropertyTypeText", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should throw when not bind", () => {
        expect(() => moduleToTest()).to.throw();
    });

    it("should throw when no model defined", () => {
        const instance = {};
        expect(() => moduleToTest.call(instance)).to.throw();
    });

    it("should return false for no propertyType", () => {
        const instance = { model: {} };
        expect(moduleToTest.call(instance)).to.be.false();
    });

    it("should return false for wrong propertyType", () => {
        const instance = { model: { propertyType: 'not-text' } };
        expect(moduleToTest.call(instance)).to.be.false();
    });

    it("should return true for correct propertyType", () => {
        const instance = { model: { propertyType: 'text' } };
        expect(moduleToTest.call(instance)).to.be.true();
    });
});
