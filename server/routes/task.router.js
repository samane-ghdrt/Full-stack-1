const express = require("express");

const {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} = require("../controller/task.controller");

const router = express.Router();
router.post("/tasks/", createTask);
router.get("/tasks/", getAllTask);
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id", updateTask);
module.exports = router;
