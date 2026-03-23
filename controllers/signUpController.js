const db = require("../db/queries");
const { CustomFailedToLoadError } = require("../errors/CustomErrors");
const { validationResult, matchedData } = require("express-validator");
const { validateUser } = require("../lib/validator");
const bcrypt = require("bcryptjs");

async function getSignUp(req, res) {
    try {
        res.render("sign-up-form", {
            title: "Sign Up"
        });
    } catch (err) {
        throw new CustomFailedToLoadError("Signup page failed to load.");
    }
}

const createUserPost = [
    validateUser,
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("sign-up-form", {
                title: "Sign Up",
                errors: errors.array(),
            });
        }
        try {
            const { firstName, lastName, email, password } = matchedData(req);
            const hashedPassword = await bcrypt.hash(password, 10);
            await db.insertUser(firstName, lastName, email, hashedPassword);
            res.redirect("/");
        } catch (err) {
            next(err);
        }
    }
];

module.exports = {
    getSignUp,
    createUserPost,
}