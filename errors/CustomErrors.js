class CustomFailedToLoadError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 500;
        this.name = "FailedToLoadError";
    }
}

module.exports = {
    CustomFailedToLoadError,
};