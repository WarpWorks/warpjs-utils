const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isOverviewPanel');

const expect = testHelpers.expect;

describe("handlebars/helpers/isOverviewPanel", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should recognize with correct type", () => {
        expect(moduleToTest.call({type: 'Overview'})).to.be.true();
    });

    it("should not recognize with wrong type", () => {
        expect(moduleToTest.call({type: 'Not Overview'})).to.be.false();
    });
});
