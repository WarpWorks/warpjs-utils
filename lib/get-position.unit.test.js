const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./get-position');

const expect = testHelpers.expect;

const DEFAULT_VALUE = Number.MAX_SAFE_INTEGER;

describe("lib/get-position", () => {
    it("should expose a function with 1 param", () => {
        expect(moduleToTest).to.be.a('function').to.have.lengthOf(1);
    });

    context("invalid param", () => {
        it("should handle no params", () => {
            expect(moduleToTest()).to.equal(DEFAULT_VALUE);
        });

        it("should handle an array", () => {
            expect(moduleToTest([])).to.equal(DEFAULT_VALUE);
        });

        it("should handle not an object", () => {
            expect(moduleToTest('foobar')).to.equal(DEFAULT_VALUE);
        });
    });

    context("invalid value", () => {
        it("should ignore undefined", () => {
            const item = { foo: 'bar' };
            expect(moduleToTest(item)).to.equal(DEFAULT_VALUE);
        });

        it("should ignore non-number string", () => {
            const item = { relnPosition: 'foobar' };
            expect(moduleToTest(item)).to.equal(DEFAULT_VALUE);
        });

        it("should ignore boolean", () => {
            const item = { relnPosition: true };
            expect(moduleToTest(item)).to.equal(DEFAULT_VALUE);
        });

        it("should ignore arrays", () => {
            const item = { relnPosition: [] };
            expect(moduleToTest(item)).to.equal(DEFAULT_VALUE);
        });

        it("should ignore objects", () => {
            const item = { relnPosition: {} };
            expect(moduleToTest(item)).to.equal(DEFAULT_VALUE);
        });

        it("should ignore invalid parseInt() string", () => {
            const item = { relnPosition: '1a' };
            expect(moduleToTest(item)).to.equal(DEFAULT_VALUE);
        });
    });

    context("valid value", () => {
        it("should handle number string", () => {
            const item = { relnPosition: '123' };
            expect(moduleToTest(item)).to.equal(123);
        });

        it("should handle number", () => {
            const item = { relnPosition: 123 };
            expect(moduleToTest(item)).to.equal(123);
        });
    });

    // Unsure why we get this scenario, but making sure it doesn't break.
    it("should handle {relPosition:'', position:undefined, Position:10}", () => {
        const item = { relnPosition: '', Position: 10 };
        expect(moduleToTest(item)).to.equal(10);
    });
});
