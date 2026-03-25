const db = require("../db/queries");

async function getJoinForm(req, res) {
    try {
        res.render("join-the-club-form", {
            title: "Join The Club",
        })
    } catch(err) {
        throw new CustomFailedToLoad("Join The Club Form failed to load.");
    }
}

module.exports = {
    getJoinForm,
}