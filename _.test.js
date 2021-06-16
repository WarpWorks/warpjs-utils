module.exports = (filename) => filename.startsWith(__dirname)
    ? filename.substr(__dirname.length + 1)
    : filename;
