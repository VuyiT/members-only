const db = require("../db/queries");
const { CustomFailedToLoadError } = require("../errors/CustomErrors");

async function getJoinForm(req, res) {
    try {
        res.render("join-the-club-form", {
            title: "Join The Club",
        })
    } catch(err) {
        throw new CustomFailedToLoadError("Join The Club page failed to load.");
    }
}

module.exports = {
    getJoinForm,
}