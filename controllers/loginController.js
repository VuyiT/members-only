const { CustomFailedToLoadError } = require("../errors/CustomErrors");

async function getLogin(req, res) {
    try {
        res.render("login-form", {
            title: "Log In",
        });
    } catch (error) {
        throw new CustomFailedToLoadError("Login form failed to load.");
    }
}

module.exports = {
    getLogin,
}