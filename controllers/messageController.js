const db = require("../db/queries");
const { CustomFailedToLoadError } = require("../errors/CustomErrors");
const { validateMessage } = require("../lib/messageValidation");
const { validationResult, matchedData } = require("express-validator");

async function getNewMessage(req, res) {
    try {
            res.render("new-message-form", {
                title: "Create New Message"
            });
        } catch (error) {
            throw new CustomFailedToLoadError("New message page failed to load.");
        }
}

const createNewMessagePost = [
    validateMessage,
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("new-message-form", {
                title: "Create New Message",
                errors: errors.array(),
            });
        }
        try {
            const { id } = req.user;
            const { title, messageText } = matchedData(req);
            await db.insertMessage(id, title, messageText);
            res.redirect("/");
        } catch (err) {
            next(err);
        }
    }
];

module.exports = {
    getNewMessage,
    createNewMessagePost,
}