const testHelpers = require('@quoin/node-test-helpers');

const constants = require('./constants');
const createResource = require('./create-resource');

const moduleToTest = require('./send-hal');

const expect = testHelpers.expect;

describe("lib/send-hal", () => {
    let resource;

    const routesInfo = {
        expand(routeName) {
            return `${routeName}`;
        }
    };

    beforeEach(() => {
        resource = createResource('/foo/bar/path', { foo: 'bar' });
    });

    it("should expose a function with 5 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(5);
    });

    it("should set default status", () => {
        const { req, res } = testHelpers.createMocks();

        moduleToTest(req, res, resource, routesInfo);

        expect(res._getStatusCode()).to.equal(200);
    });

    it("should set 'Content-Type'", () => {
        const { req, res } = testHelpers.createMocks();

        moduleToTest(req, res, resource, routesInfo);

        const headers = res._getHeaders();

        expect(headers).to.have.property('content-type');
        expect(headers['content-type']).to.equal(constants.HAL_CONTENT_TYPE);
    });

    it("should use status when passed", () => {
        const { req, res } = testHelpers.createMocks();

        moduleToTest(req, res, resource, routesInfo, 123);

        expect(res._getStatusCode()).to.equal(123);
    });
});
