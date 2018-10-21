const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./flatten-hal');

const expect = testHelpers.expect;

describe("lib/flatten-hal", () => {
    it("should expose a function with 1 param", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(1);
    });

    it("should fail if not an object", () => {
        const hal = undefined;

        expect(() => moduleToTest(hal)).to.throw(Error, /^Invalid HAL object\.$/);
    });

    it("should return a clone", () => {
        const hal = {};

        expect(moduleToTest(hal)).to.deep.equal(hal);
        expect(moduleToTest(hal)).not.to.equal(hal);
    });

    it("should return a deep clone", () => {
        const hal = {
            foobar: {
                foo: 'bar'
            }
        };
        const value = moduleToTest(hal);

        expect(value).to.deep.equal(hal);
        expect(value.foobar).not.to.equal(hal.foobar);
    });

    context("no _embedded", () => {
        it("should handle empty", () => {
            const hal = {};

            expect(moduleToTest(hal)).to.deep.equal(hal);
        });

        it("should handle with few props", () => {
            const hal = {
                allo: 'mon',
                ami: 'Pierrot'
            };

            expect(moduleToTest(hal)).to.deep.equal(hal);
        });
    });

    context("_embedded", () => {
        it("should add embedded to clone properties", () => {
            const hal = {
                _embedded: {
                    values: []
                }
            };

            expect(moduleToTest(hal)).to.have.property('values');
        });

        it("should throw error when _embedded contains a key that is already defined", () => {
            const hal = {
                already: 'defined',
                _embedded: {
                    already: 'again'
                }
            };

            expect(() => moduleToTest(hal)).to.throw(Error, /^Duplicate _embedded\.already key\.$/);
        });

        it("should be flatten recursively", () => {
            const hal = {
                foo1: 'bar1',
                _embedded: {
                    first: [{
                        foo2: 'bar2',
                        _embedded: {
                            second: [{
                                foo3: 'bar3'
                            }]
                        }
                    }]
                }
            };
            const expected = {
                foo1: 'bar1',
                first: [{
                    foo2: 'bar2',
                    second: [{
                        foo3: 'bar3'
                    }]
                }]
            };

            expect(moduleToTest(hal)).to.deep.equal(expected);
        });
    });
});
