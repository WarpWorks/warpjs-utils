const fs = require('fs');
const Promise = require('bluebird');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./get-handlebars-helpers-dir');

const expect = testHelpers.expect;
const stat = Promise.promisify(fs.stat);

describe("lib/get-handlebars-helpers-dir", () => {
    it("should expose a function with no params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(0);
    });

    it("should return a path", () => {
        const value = moduleToTest();
        expect(value).to.be.a('string');
    });

    it("should return a path that exists", () => {
        const value = moduleToTest();
        return Promise.resolve()
            .then(() => stat(value))
            .then((statInfo) => {
                expect(statInfo.isDirectory()).to.be.true();
            });
    });
});
