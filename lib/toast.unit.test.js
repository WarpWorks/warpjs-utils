const _ = require('lodash');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./toast');

const expect = testHelpers.expect;

describe("lib/toast", () => {
    it("should expose an object", () => {
        expect(moduleToTest).to.be.an('object');
    });

    describe("props", () => {
        let clone;

        before(() => {
            clone = _.clone(moduleToTest);
        });

        it("should expose function 'error' with 3 params", () => {
            expect(clone).to.have.property('error');
            expect(clone.error).to.be.a('function');
            expect(clone.error).to.have.lengthOf(3);
            delete clone.error;
        });

        it("should expose function 'info' with 3 params", () => {
            expect(clone).to.have.property('info');
            expect(clone.info).to.be.a('function');
            expect(clone.info).to.have.lengthOf(3);
            delete clone.info;
        });

        it("should expose function 'success' with 3 params", () => {
            expect(clone).to.have.property('success');
            expect(clone.success).to.be.a('function');
            expect(clone.success).to.have.lengthOf(3);
            delete clone.success;
        });

        it("should expose function 'warning' with 3 params", () => {
            expect(clone).to.have.property('warning');
            expect(clone.warning).to.be.a('function');
            expect(clone.warning).to.have.lengthOf(3);
            delete clone.warning;
        });

        it("should expose function 'loading' with 3 params", () => {
            expect(clone).to.have.property('loading');
            expect(clone.loading).to.be.a('function');
            expect(clone.loading).to.have.lengthOf(3);
            delete clone.loading;
        });

        it("should expose function 'close' with 2 params", () => {
            expect(clone).to.have.property('close');
            expect(clone.close).to.be.a('function');
            expect(clone.close).to.have.lengthOf(2);
            delete clone.close;
        });

        it("should expose function 'closeAll' with 1 param", () => {
            expect(clone).to.have.property('closeAll');
            expect(clone.closeAll).to.be.a('function');
            expect(clone.closeAll).to.have.lengthOf(1);
            delete clone.closeAll;
        });

        after(() => {
            expect(clone).to.be.empty();
        });

    });
});
