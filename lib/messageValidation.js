const { body } = require("express-validator");

const emptyErr = "cannot be empty.";

exports.validateMessage = [
    body("title").trim()
        .escape()
        .notEmpty().withMessage(`Message title ${emptyErr}`)
        .isLength({ max: 100 }). withMessage("Message title cannot exceed 100 characters."),

    body("messageText").trim()
        .escape()
        .notEmpty().withMessage(`Message text ${emptyErr}`)
];