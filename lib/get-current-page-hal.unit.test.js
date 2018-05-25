const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./get-current-page-hal');

const expect = testHelpers.expect;

describe("lib/get-current-page-hal", () => {
    it("should expose a function with 2 params", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(2);
    });

    it("should have known structure for success", () => {
        const jq = {
            ajax(settings) {
                settings.success('data', 'text status', {jqXHR: 'object'});
            }
        };

        return moduleToTest(jq)
            .then(
                (res) => {
                    expect(res).to.deep.equal({
                        data: 'data',
                        textStatus: 'text status',
                        jqXHR: {
                            jqXHR: 'object'
                        }
                    });
                },
                testHelpers.unexpectedFlow.bind(null, "Should not fail")
            );
    });

    it("should have known structure for error", () => {
        const jq = {
            ajax(settings) {
                settings.error({responseJSON: {some: 'response'}}, 'text status', 'some-error');
            }
        };

        return moduleToTest(jq)
            .then(
                (res) => {
                    expect(res).to.deep.equal({
                        error: {
                            textStatus: 'text status',
                            errorThrown: 'some-error'
                        },
                        data: {
                            some: 'response'
                        }
                    });
                },
                testHelpers.unexpectedFlow.bind(null, "Should not fail")
            );
    });

    it("should receive 'url' if passed", () => {
        const jq = {
            ajax(settings) {
                expect(settings).to.have.property('url');
                expect(settings.url).to.equal('some-url');
                settings.success('data', 'text status', {jqXHR: 'object'});
            }
        };

        return moduleToTest(jq, 'some-url')
            .then(
                (res) => {},
                testHelpers.unexpectedFlow.bind(null, "Should not fail")
            )
        ;
    });
});
