const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const taskRouter = require("./routes/task.router");
const directoryRouter = require("./routes/directory.router");

const app = express.Router();

app.use(
  cors(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true })
);

app.use("/tasks", taskRouter);
app.use("/directories", directoryRouter);

app.listen(5050, () => {
  console.log("server is running on port ${PORT}");
});
