const semver = require('semver');

const STATUS_RANKS = Object.freeze({
    Approved: 1,
    IndividualContribution: 2,
    Proposal: 3,
    Draft: 4,
    Retired: 5,
    Declined: 6,
    InheritFromParent: 7,
    undefined: 8,
    INVALID: 100
});

const DEFAULT_VERSION = semver.coerce('1.0').version;

module.exports = (left, right) => {
    if (left.Status === right.Status) {
        const leftSemver = semver.coerce(left.Version);
        const leftVersion = leftSemver ? leftSemver.version : DEFAULT_VERSION;
        const rightSemver = semver.coerce(right.Version);
        const rightVersion = rightSemver ? rightSemver.version : DEFAULT_VERSION;

        return semver.lt(leftVersion, rightVersion) ? 1
            : semver.gt(leftVersion, rightVersion) ? -1
            : 0;
    } else {
        const leftStatusRank = STATUS_RANKS[left.Status] || STATUS_RANKS.INVALID;
        const rightStatusRank = STATUS_RANKS[right.Status] || STATUS_RANKS.INVALID;
        return leftStatusRank - rightStatusRank;
    }
};
