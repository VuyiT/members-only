const db = require("../db/queries");
const { CustomNotFoundError } = require("../errors/CustomErrors");

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    if (!messages) {
        throw new CustomNotFoundError("Messages not found");
    }
    res.render("index", {
        title: "Member Messages",
        messages,
    });
}

async function deleteMessage(req, res, next) {
    try {
         await db.deleteMessageById(req.params.messageId);
        res.redirect("/");
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getMessages,
    deleteMessage,
}