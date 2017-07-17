const testHelpers = require('@quoin/node-test-helpers');

const constants = require('./constants');

const moduleToTest = require('./send-hal');

const expect = testHelpers.expect;

describe("lib/send-hal", () => {
    const resource = {
        toJSON() {
            return { foo: 'bar' };
        }
    };

    it("should expose a function with 4 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(4);
    });

    it("should set default status", () => {
        const { req, res } = testHelpers.createMocks();

        moduleToTest(req, res, resource);

        expect(res._getStatusCode()).to.equal(200);
    });

    it("should set 'Content-Type'", () => {
        const { req, res } = testHelpers.createMocks();

        moduleToTest(req, res, resource);

        const headers = res._getHeaders();

        expect(headers).to.have.property('Content-Type').to.equal(constants.HAL_CONTENT_TYPE);
    });

    it("should use status when passed", () => {
        const { req, res } = testHelpers.createMocks();

        moduleToTest(req, res, resource, 123);

        expect(res._getStatusCode()).to.equal(123);
    });
});
