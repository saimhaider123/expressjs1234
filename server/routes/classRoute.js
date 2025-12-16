const express = require("express");
const router = express.Router();
const controller = require("../controllers/classController");

router.post("/add", controller.addClass);
router.get("/", controller.getClasses);
router.put("/update/:id", controller.updateClass);
router.delete("/delete/:id", controller.deleteClass);

module.exports = router;
