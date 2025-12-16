const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/connection");

const app = express();   // <-- app ko pehle define karo

app.use(cors());         // <-- phir middleware use karo
app.use(express.json());

// Routes
app.use("/students", require("./routes/studentRoute"));
app.use("/teachers", require("./routes/teacherRoute"));
app.use("/classes", require("./routes/classRoute"));

// Start server
app.listen(process.env.PORT || 5000, () => {
    console.log("Server chal raha hai...");
});
