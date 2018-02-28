var express = require("express");
var router = express.Router();
var controller = require("../../controllers/LoggerInfoController");

router.post("/createLogger",controller.createLogger);
module.exports = router;