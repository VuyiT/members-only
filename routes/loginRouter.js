const { Router } = require("express");
const loginRouter = Router();
const loginController = require("../controllers/loginController");
const passport = require("passport");
require("../config/passport");

loginRouter.get("/", loginController.getLogin);
loginRouter.post("/", passport.authenticate("local", {
    successRedirect: "/log-in",
    failureRedirect: "/log-in",
})
);

module.exports = loginRouter;