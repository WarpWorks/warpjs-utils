const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./by-name');

const expect = testHelpers.expect;

describe("lib/by-name", () => {
    it("should expose a function with 2 params", () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(2);
    });

    context("without params", () => {
        it("should return 0", () => {
            expect(moduleToTest()).to.equal(0);
        });
    });

    context("with 1 param", () => {
        it("should be 0 if empty", () => {
            const left = { Name: '' };
            expect(moduleToTest(left)).to.equal(0);
        });

        it("should be greater if non-empty", () => {
            const left = { Name: 'hello' };
            expect(moduleToTest(left)).to.be.above(0);
        });

        it("should be 0 if non-object", () => {
            const left = [];
            expect(moduleToTest(left)).to.equal(0);
        });
    });

    context("with 2 params", () => {
        it("should detect 'Hello' < 'World'", () => {
            const left = { Name: 'Hello' };
            const right = { Name: 'World' };
            expect(moduleToTest(left, right)).to.be.below(0);
        });

        it("should detect 'Foo' > 'Bar'", () => {
            const left = { Name: 'Foo' };
            const right = { Name: 'Bar' };
            expect(moduleToTest(left, right)).to.be.above(0);
        });

        it("should detect ' Hello' < 'World'", () => {
            const left = { Name: ' Hello' };
            const right = { Name: 'World' };
            expect(moduleToTest(left, right)).to.be.below(0);
        });

        it("should detect ' Foo' > 'Bar'", () => {
            const left = { Name: ' Foo' };
            const right = { Name: 'Bar' };
            expect(moduleToTest(left, right)).to.be.above(0);
        });

        it("should detect ' Foo' == 'Foo'", () => {
            const left = { Name: ' Foo' };
            const right = { Name: 'Foo' };
            expect(moduleToTest(left, right)).to.equal(0);
        });
    });
});
