const db = require("../db/queries");
const { CustomNotFoundError } = require("../errors/CustomErrors");

async function getMessages(req, res) {
    const messages = await db.getAllMessagesByUsers();
    if (!messages) {
        throw new CustomNotFoundError("Messages not found");
    }
    res.render("index", {
        title: "Member Messages",
        messages,
    });
}

module.exports = {
    getMessages,
}