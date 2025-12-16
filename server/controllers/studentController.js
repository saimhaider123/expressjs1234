const Student = require("../models/studentModel");

exports.addStudent = async (req, res) => {
    const student = await Student.create(req.body);
    res.json({ message: "Student added", student });
};

exports.getStudents = async (req, res) => {
    const list = await Student.find();
    res.json({ message: "All students", list });
};

exports.updateStudent = async (req, res) => {
    const updated = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json({ message: "Student updated", updated });
};

exports.deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
};
