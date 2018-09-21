const packageJson = require('./../package.json');

const basename = packageJson.name.replace(/@/g, '').replace(/\//g, '-');
const version = packageJson.version;
const versionedName = `${basename}-${version}`;

module.exports = Object.freeze({
    CONTENT_PLACEHOLDER: '#warpjs-content-placeholder',
    HAL_CONTENT_TYPE: 'application/hal+json',

    basename,
    version,
    versionedName,

    entryPoints: Object.freeze({
        portal: `${basename}-portal-${version}`,
        content: `${basename}-content-${version}`,
        studio: `${basename}-studio-${version}`
    }),

    folders: Object.freeze({
        assets: 'assets'
    }),

    assets: Object.freeze({
        portal: Object.freeze({
            css: `${basename}-portal-${version}.min.css`,
            js: `${basename}-portal-${version}.min.js`
        }),
        content: Object.freeze({
            css: `${basename}-content-${version}.min.css`,
            js: `${basename}-content-${version}.min.js`
        }),
        studio: Object.freeze({
            css: `${basename}-studio-${version}.min.css`,
            js: `${basename}-studio-${version}.min.js`
        })
    })
});
