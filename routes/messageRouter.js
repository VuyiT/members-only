const { Router } = require("express");
const messageRouter = Router();
const messageController = require("../controllers/messageController");

messageRouter.get("/", messageController.getNewMessage);
messageRouter.post("/", messageController.createNewMessagePost);

module.exports = messageRouter;