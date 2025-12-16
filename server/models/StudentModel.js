const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    className: String,
    rollNo: Number
});

module.exports = mongoose.model("Student", studentSchema);
