class CustomFailedToLoadError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 500;
        this.name = "FailedToLoadError";
    }
}
class CustomNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = "NotFoundError";
    }
}

module.exports = {
    CustomFailedToLoadError,
    CustomNotFoundError
};