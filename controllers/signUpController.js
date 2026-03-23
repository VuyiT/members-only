const db = require("../db/queries");
const { CustomFailedToLoadError } = require("../errors/CustomErrors");

async function getSignUp(req, res) {
    try {
        res.render("sign-up-form", {
            title: "Sign Up"
        });
    } catch (err) {
        throw new CustomFailedToLoadError("Signup page failed to load.");
    }
}


module.exports = {
    getSignUp,
}