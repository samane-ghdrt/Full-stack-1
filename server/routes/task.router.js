const express = require("express");

const {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} = require("../controller/task.controller");

const router = express.Router();
router.post("/", createTask);
router.get("/", getAllTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);
module.exports = router;
