const Task = require("../models/tasks");

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updateTask = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
  deleteTask,
  updateTask,
};
