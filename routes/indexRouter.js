const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.getMessages);
indexRouter.post("/:messageId/delete", indexController.deleteMessage);

module.exports = indexRouter;