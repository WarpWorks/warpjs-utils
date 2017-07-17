const hal = require('hal');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./create-resource');

const expect = testHelpers.expect;

describe("lib/create-resource", () => {
    it("should expose a function with 2 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(2);
    });

    it("should return an instance of hal.Resource", () => {
        const req = testHelpers.createRequest();
        const value = moduleToTest(req);
        expect(value).to.be.an.instanceOf(hal.Resource);
    });

    it("should return _links when no data", () => {
        const req = testHelpers.createRequest({
            method: 'GET',
            url: '/some/original/url'
        });
        const value = moduleToTest(req);
        expect(value.toJSON()).to.deep.equal({
            _links: {
                self: {
                    href: '/some/original/url'
                }
            }
        });
    });

    it("should return _links and data", () => {
        const req = testHelpers.createRequest({
            method: 'GET',
            url: '/some/original/url'
        });
        const data = { foo: 'bar' };
        const value = moduleToTest(req, data);
        expect(value.toJSON()).to.deep.equal({
            foo: 'bar',
            _links: {
                self: {
                    href: '/some/original/url'
                }
            }
        });
    });

    it("should accept string path", () => {
        const req = '/a/simple/string';
        const data = { foo: 'bar' };
        const value = moduleToTest(req, data);

        expect(value.toJSON()).to.deep.equal({
            foo: 'bar',
            _links: {
                self: {
                    href: '/a/simple/string'
                }
            }
        });
    });

    it("should accept empty string path", () => {
        const req = '';
        const data = { foo: 'bar' };
        const value = moduleToTest(req, data);

        expect(value.toJSON()).to.deep.equal({
            foo: 'bar'
        });
    });
});
