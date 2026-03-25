const db = require("../db/queries");
const { validationResult, matchedData } = require("express-validator");
const { CustomFailedToLoadError } = require("../errors/CustomErrors");
const { validateJoin } = require("../lib/joinClubValidation");

async function getJoinForm(req, res) {
    try {
        res.render("join-the-club-form", {
            title: "Join The Club",
        })
    } catch(err) {
        throw new CustomFailedToLoadError("Join The Club page failed to load.");
    }
}

const joinClubPost = [
    validateJoin,
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("join-the-club-form", {
                title: "Join The Club",
                errors: errors.array(),
            });
        }
        try {
            const { email } = matchedData(req);
            await db.updateMembershipStatusByEmail(email);
            res.redirect("/log-in");
        } catch (err) {
            next(err);
        }
    }
];

module.exports = {
    getJoinForm,
    joinClubPost,
}