const RoutesInfo = require('@quoin/expressjs-routes-info');

/**
 *  The custom links {{label,type,id}}.
 */
const CONTENT_LINK_RE = /{{(.*?),(.*?),(.*?)}}/g;

function contentLinkReplacer(match, label, type, id) {
    const href = RoutesInfo.expand('entity', {id, type});
    const previewUrl = RoutesInfo.expand('W2:portal:preview', {id, type});
    return `<a href="${href}" data-warpjs-action="preview" data-warpjs-preview-url="${previewUrl}">${label}<span class="glyphicon glyphicon-link"></span></a>`;
}

module.exports = (text) => (text || '').replace(CONTENT_LINK_RE, contentLinkReplacer);
