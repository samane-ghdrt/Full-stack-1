const mongoose = require("mongoose");
const Directory = require("./directory");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  important: { type: Boolean, default: false },
  deadline: Date,
  dirId: {
    type: mongoose.Schema.types.objectId,
    ref: "Directory",
    require: true,
  },
});

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
