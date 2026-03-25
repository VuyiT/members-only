const { Router } = require("express");
const joinClubRouter = Router();
const joinClubController = require("../controllers/joinClubController");

joinClubRouter.get("/", joinClubController.getJoinForm);

module.exports = joinClubRouter;