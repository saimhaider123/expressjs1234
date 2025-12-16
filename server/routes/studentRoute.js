const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.post("/add", controller.addStudent);
router.get("/", controller.getStudents);
router.put("/update/:id", controller.updateStudent);
router.delete("/delete/:id", controller.deleteStudent);

module.exports = router;
