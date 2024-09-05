const express = require("express");
const studentRoutes = require("./src/students/routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, (req, res) => {
  console.log(`App Listening On PORT ${PORT} `);
});
