const _ = require('lodash');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./constants');

const expect = testHelpers.expect;

describe("lib/constants", () => {
    it("should expose an object with known properties", () => {
        expect(moduleToTest).to.be.an('object');

        const clone = _.clone(moduleToTest);
        testHelpers.verifyProperties(clone, 'string', [
            'HAL_CONTENT_TYPE'
        ]);

        expect(clone).to.be.empty();
    });

    describe("properties", () => {
        it("HAL_CONTENT_TYPE", () => {
            expect(moduleToTest).to.have.property('HAL_CONTENT_TYPE')
                .to.be.a('string').to.equal('application/hal+json');
        });
    });
});
