const path = require('path');

const expand = true;
const flatten = true;

module.exports = (dest, filePatterns) => Object.freeze({
    expand,
    flatten,
    dest,
    src: filePatterns.map((filePattern) => {
        const packageFolder = path.dirname(require.resolve(`${filePattern.packageName}/package.json`));
        return [ packageFolder ].concat(filePattern.filePath.split('/')).join(path.sep);
    })
});
