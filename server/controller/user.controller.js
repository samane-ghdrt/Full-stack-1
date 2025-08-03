const Task = require("../models/tasks");
const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const User = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const User = await User.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const geyUserByTask = async (req, res) => {
  try {
    const tasks = await Task.find({ dirId: req.params.dirId });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getAllUser,
  deleteUser,
  updateUser,
  geyUserByTask
};
