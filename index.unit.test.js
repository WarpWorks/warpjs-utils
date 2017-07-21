const _ = require('lodash');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./index');

const expect = testHelpers.expect;

describe("index", () => {
    it("should expose an object with known properties", () => {
        expect(moduleToTest).to.be.an('object');

        const clone = _.clone(moduleToTest);
        testHelpers.verifyProperties(clone, 'function', [
            'byPositionThenName',
            'compareIDs',
            'createResource',
            'getCurrentPageHAL',
            'sendError',
            'sendHal',
            'sendIndex',
            'urlFormat',
            'WarpJSError',
            'wrapWith406'
        ]);

        testHelpers.verifyProperties(clone, 'object', [
            'constants'
        ]);

        expect(clone).to.be.empty();
    });
});
