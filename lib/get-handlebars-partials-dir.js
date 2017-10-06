const path = require('path');

const REPO_ROOT = path.dirname(require.resolve('./../package.json'));

module.exports = () => path.join(REPO_ROOT, 'handlebars', 'partials');
