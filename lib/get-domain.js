const Promise = require('bluebird');

const getDomainName = require('./get-domain-name');

module.exports = (domainName) => {
    // Avoid cyclic dependency.
    const warpjsCore = require('@warp-works/core');
    return Promise.resolve()
        .then(() => warpjsCore.getDomainByName(getDomainName(domainName)))
    ;
};
