const { body } = require("express-validator");

const emptyErr = "cannot be empty.";

exports.validateMessage = [
    body("title").trim()
        .notEmpty().withMessage(`Message title ${emptyErr}`)
        .isLength({ max: 100 }). withMessage("Message title cannot exceed 100 characters."),

    body("messageText").trim()
        .notEmpty().withMessage(`Message text ${emptyErr}`)
];