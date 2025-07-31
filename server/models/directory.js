const mongoose = require("mongoose");

const DirectorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Directory = mongoose.model("directory", DirectorySchema);

module.exports = Directory;
