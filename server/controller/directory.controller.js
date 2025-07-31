const Directory = require("../models/directory");

const crateDirectory = async (req, res) => {
  try {
    const newDirectory = await Directory.create(req.body);
    res.status(201).json(newDirectory);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllDirectory = async (req, res) => {
  try {
    const Directorys = await Directory.find();
    res.status(200).json(Directorys);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteDirectory = async (req, res) => {
  const { id } = req.params;
  try {
    const directory = await Directory.findByIdAndDelete(id);
    res.status(200).json(directory);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updateDirectory = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const directory = await Directory.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json(directory);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  crateDirectory,
  getAllDirectory,
  deleteDirectory,
  updateDirectory,
};
