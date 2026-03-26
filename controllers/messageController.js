const db = require("../db/queries");
const { CustomFailedToLoadError } = require("../errors/CustomErrors");

async function getNewMessage(req, res) {
    try {
            res.render("new-message-form", {
                title: "Create New Message"
            });
        } catch (error) {
            throw new CustomFailedToLoadError("New message page failed to load.");
        }
}

module.exports = {
    getNewMessage,
}