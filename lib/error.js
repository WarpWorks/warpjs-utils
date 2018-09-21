class WarpJSError extends Error {
    constructor(message) {
        super(message);
        this.name = `WarpWorks.${this.constructor.name}`;
    }
}

module.exports = WarpJSError;
