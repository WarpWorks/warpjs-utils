const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./by-status-then-version');

const expect = testHelpers.expect;

describe("lib/by-status-then-veresion", () => {
    it("should expose a function", () => {
        expect(moduleToTest).to.be.a('function').and.have.lengthOf(2);
    });

    it("should equal two empty objects", () => {
        const left = {};
        const right = {};
        const value = moduleToTest(left, right);
        expect(value).to.equal(0);
    });

    it("should compare a left version to right no version", () => {
        const left = { Version: '1.1' };
        const right = {};
        const value = moduleToTest(left, right);
        expect(value).to.be.below(0);
    });

    it("should compare a left no version to right version", () => {
        const left = { };
        const right = { Version: '1.1' };
        const value = moduleToTest(left, right);
        expect(value).to.be.above(0);
    });

    it("should compare left status to no right status", () => {
        const left = { Status: 'Approved' };
        const right = { };
        const value = moduleToTest(left, right);
        expect(value).to.be.below(0);
    });

    it("should compare left invalid status to no right status", () => {
        const left = { Status: 'Foo' };
        const right = { };
        const value = moduleToTest(left, right);
        expect(value).to.be.above(0);
    });

    it("should compare left no status to right invalid status", () => {
        const left = { };
        const right = { Status: 'Foo' };
        const value = moduleToTest(left, right);
        expect(value).to.be.below(0);
    });

    context("Status order", () => {
        it("should compare Approved to IndividualContribution", () => {
            const left = { Status: 'Approved' };
            const right = { Status: 'IndividualContribution' };
            const value = moduleToTest(left, right);
            expect(value).to.be.below(0);
        });

        it("should compare IndividualContribution to Proposal", () => {
            const left = { Status: 'IndividualContribution' };
            const right = { Status: 'Proposal' };
            const value = moduleToTest(left, right);
            expect(value).to.be.below(0);
        });

        it("should compare Proposal to Draft", () => {
            const left = { Status: 'Proposal' };
            const right = { Status: 'Draft' };
            const value = moduleToTest(left, right);
            expect(value).to.be.below(0);
        });

        it("should compare Draft to Retired", () => {
            const left = { Status: 'Draft' };
            const right = { Status: 'Retired' };
            const value = moduleToTest(left, right);
            expect(value).to.be.below(0);
        });

        it("should compare Retired to Declined", () => {
            const left = { Status: 'Retired' };
            const right = { Status: 'Declined' };
            const value = moduleToTest(left, right);
            expect(value).to.be.below(0);
        });

        it("should compare Declined to InheritFromParent", () => {
            const left = { Status: 'Declined' };
            const right = { Status: 'InheritFromParent' };
            const value = moduleToTest(left, right);
            expect(value).to.be.below(0);
        });
    });
});
