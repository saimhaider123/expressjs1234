const ClassModel = require("../models/ClassModel");

exports.addClass = async (req, res) => {
    const newClass = await ClassModel.create(req.body);
    res.json({ message: "Class added", newClass });
};

exports.getClasses = async (req, res) => {
    const classes = await ClassModel.find();
    res.json({ message: "All classes", classes });
};

exports.updateClass = async (req, res) => {
    const updated = await ClassModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json({ message: "Class updated", updated });
};

exports.deleteClass = async (req, res) => {
    await ClassModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Class deleted" });
};
