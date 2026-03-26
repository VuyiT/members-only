require("dotenv").config();
const { body } = require("express-validator");

const db = require("../db/queries");

exports.validateJoin = [
    body("email").trim()
        .notEmpty().withMessage("Email cannot be empty.")
        .custom(async value => {
            const user = await db.getUserByEmail(value);
            if (!user) {
                throw new Error("This email does not exist in our system. Create a new account.");
            }
        }),
    
        body("passcode").trim()
            .notEmpty().withMessage("Passcode cannot be empty.")
            .custom(value => {
                if (value !== process.env.SECRET_PASSCODE) {
                    throw new Error("The passcode you provided is incorrect. Try again.");
                }
                return true;
            })
];
