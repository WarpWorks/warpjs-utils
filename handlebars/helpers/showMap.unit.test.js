const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./showMap');

const expect = testHelpers.expect;

describe("handlebars/helpers/showMap", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should be false if no mapMatrix", () => {
        const context = {};
        const value = moduleToTest.call(context);
        expect(value).to.be.false();
    });

    it("should be false if no columns", () => {
        const context = {
            mapMatrix: {}
        };
        const value = moduleToTest.call(context);
        expect(value).to.be.false();
    });

    it("should be false if empty columns", () => {
        const context = {
            mapMatrix: {
                subColumnHeaders: []
            }
        };
        const value = moduleToTest.call(context);
        expect(value).to.be.false();
    });

    it("should be false if no rows", () => {
        const context = {
            mapMatrix: {
                subColumnHeaders: [ 'foo' ]
            }
        };
        const value = moduleToTest.call(context);
        expect(value).to.be.false();
    });

    it("should be false if empty rows", () => {
        const context = {
            mapMatrix: {
                subColumnHeaders: [ 'foo' ],
                subRows: []
            }
        };
        const value = moduleToTest.call(context);
        expect(value).to.be.false();
    });

    it("should be true if mapMatrix and columns and rows", () => {
        const context = {
            mapMatrix: {
                subColumnHeaders: [ 'foo' ],
                subRows: [ 'bar' ]
            }
        };
        const value = moduleToTest.call(context);
        expect(value).to.be.true();
    });
});
