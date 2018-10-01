const _ = require('lodash');
const testHelpers = require('@quoin/node-test-helpers');

const moduleToTest = require('./index');

const expect = testHelpers.expect;

describe("index", () => {
    it("should expose an object", () => {
        expect(moduleToTest).to.be.an('object');
    });

    describe("properties", () => {
        const clone = _.clone(moduleToTest);

        after(() => {
            expect(clone, "All props should have been tested").to.be.empty();
        });

        // Classes
        [
            'WarpJSError'
        ].forEach((info) => it(`should expose class '${info}'`, () => {
            expect(moduleToTest).to.have.property(info);
            expect(moduleToTest[info]).to.be.a('function').and.to.have.property('name', info);
            delete clone[info];
        }));

        // Functions
        [
            ['byName', 2],
            ['byPositionThenName', 2],
            ['compareIDs', 2],
            ['configureHandlebarsApp', 1],
            ['createResource', 2],
            ['documentReady', 1],
            ['expandUrlTemplate', 2],
            ['getCurrentPageHAL', 2],
            ['getHandlebarsHelpersDir', 0],
            ['getHandlebarsPartialsDir', 0],
            ['getHandlebarsViewsDir', 0],
            ['getInitialData', 1],
            ['requirePartial', 1],
            ['sendError', 4],
            ['sendErrorHal', 6],
            ['sendHal', 5],
            ['sendIndex', 6],
            ['sendPortalIndex', 6],
            ['trace', 5],
            ['urlFormat', 2],
            ['wrapWith406', 2]
        ].forEach((info) => it(`should expose function '${info[0]}' with ${info[1]} param(s)`, () => {
            expect(moduleToTest).to.have.property(info[0]);
            expect(moduleToTest[info[0]]).to.be.a('function').and.have.lengthOf(info[1]);
            delete clone[info[0]];
        }));

        // Other basic types.
        [
            ['assetsFolder', 'string'],
            ['stylePath', 'string'],
            ['cache', 'object'],
            ['constants', 'object'],
            ['docLevel', 'object'],
            ['output', 'object'],
            ['proxy', 'object'],
            ['server', 'object'],
            ['toast', 'object']
        ].forEach((info) => it(`should expose ${info[1]} '${info[0]}'`, () => {
            expect(moduleToTest).to.have.property(info[0]);
            expect(moduleToTest[info[0]]).to.be.a(info[1]);
            delete clone[info[0]];
        }));
    });
});
