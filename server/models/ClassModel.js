const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    className: String,
    section: String,
    strength: Number
});

module.exports = mongoose.model("Class", classSchema);
