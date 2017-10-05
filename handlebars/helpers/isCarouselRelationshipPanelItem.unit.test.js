const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./isCarouselRelationshipPanelItem');

const expect = testHelpers.expect;

describe("handlebars/helpers/isCarouselRelationshipPanelItem", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest)
            .to.be.a('function')
            .and.to.have.lengthOf(0);
    });

    it("should return true for 'Carousel'", () => {
        const context = {
            style: 'Carousel'
        };

        expect(moduleToTest.call(context)).to.be.true();
    });

    it("should return false for not 'Carousel'", () => {
        const context = {
            style: 'foo'
        };

        expect(moduleToTest.call(context)).to.be.false();
    });
});
