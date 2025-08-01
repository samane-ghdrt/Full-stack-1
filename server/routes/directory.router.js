const express = require("express");

const {
  crateDirectory,
  deleteDirectory,
  getAllDirectory,
  updateDirectory,
  getDirectoryByTask,
} = require("../controller/directory.controller");

const router = express.Router();

router.get("/", getAllDirectory);
router.post("/", crateDirectory);
router.patch("/:id", updateDirectory);
router.delete("/:id", deleteDirectory);
router.get("/:dirId/tasks", getDirectoryByTask);

module.exports = router;
