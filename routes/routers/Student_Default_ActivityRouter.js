var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Student_Default_ActivityController")
router.post("/Student", controller.create_Student);
router.get("/Student/:id", controller.search_Student_for_update);
router.put("/Student", controller.update_Student);
router.delete("/Student/:id", controller.delete_Student);
router.get("/Student", controller.get_all_Student);

module.exports = router;