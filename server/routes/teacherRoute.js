const express = require("express");
const router = express.Router();
const controller = require("../controllers/teacherController");

router.post("/add", controller.addTeacher);
router.get("/", controller.getTeachers);
router.put("/update/:id", controller.updateTeacher);
router.delete("/delete/:id", controller.deleteTeacher);

module.exports = router;
