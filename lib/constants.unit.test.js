const _ = require('lodash');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./constants');

const expect = testHelpers.expect;

describe("lib/constants", () => {
    it("should expose an object with known properties", () => {
        expect(moduleToTest).to.be.an('object');

        const clone = _.clone(moduleToTest);
        testHelpers.verifyProperties(clone, 'string', [
            'CONTENT_PLACEHOLDER',
            'HAL_CONTENT_TYPE',
            'basename',
            'version',
            'versionedName'
        ]);

        testHelpers.verifyProperties(clone, 'object', [
            'assets',
            'entryPoints',
            'folders'
        ]);

        expect(clone).to.be.empty();
    });

    context("HAL_CONTENT_TYPE", () => {
        it("should defined to application/hal+json", () => {
            expect(moduleToTest).to.have.property('HAL_CONTENT_TYPE');
            expect(moduleToTest.HAL_CONTENT_TYPE).to.equal('application/hal+json');
        });
    });

    context("CONTENT_PLACEHOLDER", () => {
        it("should be a string css selector", () => {
            expect(moduleToTest).to.have.property('CONTENT_PLACEHOLDER');
            expect(moduleToTest.CONTENT_PLACEHOLDER).to.be.a('string');
        });
    });
});
