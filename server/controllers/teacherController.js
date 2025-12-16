const Teacher = require("../models/TeacherModel");

exports.addTeacher = async (req, res) => {
    const teacher = await Teacher.create(req.body);
    res.json({ message: "Teacher added", teacher });
};

exports.getTeachers = async (req, res) => {
    const teachers = await Teacher.find();
    res.json({ message: "All teachers", teachers });
};

exports.updateTeacher = async (req, res) => {
    const updated = await Teacher.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json({ message: "Teacher updated", updated });
};

exports.deleteTeacher = async (req, res) => {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted" });
};
