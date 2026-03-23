const db = require("../db/queries");
const { CustomFailedToLoadError } = require("../errors/CustomErrors");

async function getSignUp(req, res, next) {
    try {
        res.render("sign-up-form", {
            title: "Sign Up"
        });
    } catch (err) {
        const error = new CustomFailedToLoadError("Signup page failed to load.");
        return next(error);
    }
}


module.exports = {
    getSignUp,
}