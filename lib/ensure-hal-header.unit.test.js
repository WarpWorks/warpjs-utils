const testHelpers = require('@quoin/node-test-helpers');

const constants = require('./constants');
const moduleToTest = require('./ensure-hal-header');

const expect = testHelpers.expect;

function verifySettings(settings) {
    expect(settings).to.have.property('headers').to.be.an('object');
    expect(settings.headers).to.have.property('Accept');
    expect(settings.headers.Accept).to.equal(constants.HAL_CONTENT_TYPE);
    expect(settings).to.have.property('dataType');
    expect(settings.dataType).to.be.a('string');
}

describe("lib/ensure-hal-header", () => {
    it("should expose a function with 1 param", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(1);
    });

    it("should add headers", () => {
        const settings = {};

        moduleToTest(settings);
        verifySettings(settings);
        expect(settings).to.have.property('dataType');
        expect(settings.dataType).to.equal('json');
    });

    it("should add 'Accept' to existing headers", () => {
        const settings = {
            headers: {}
        };

        moduleToTest(settings);
        verifySettings(settings);
        expect(settings).to.have.property('dataType');
        expect(settings.dataType).to.equal('json');
    });

    it("should overwrite 'Accept'", () => {
        const settings = {
            headers: {
                Accept: 'replace/me'
            }
        };

        moduleToTest(settings);
        verifySettings(settings);
        expect(settings).to.have.property('dataType');
        expect(settings.dataType).to.equal('json');
    });

    it("should not overwrite 'dataType'", () => {
        const settings = {
            headers: {
                Accept: 'replace/me'
            },
            dataType: 'keep-me'
        };

        moduleToTest(settings);
        verifySettings(settings);
        expect(settings).to.have.property('dataType');
        expect(settings.dataType).to.equal('keep-me');
    });
});
