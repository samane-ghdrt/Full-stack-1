const express = require("express");

const {
  crateDirectory,
  deleteDirectory,
  getAllDirectory,
  updateDirectory,
} = require("../controller/directory.controller");

const router = express.Router();

router.get("/directories/", getAllDirectory);
router.post("/directories/", crateDirectory);
router.patch("/directories/:id", updateDirectory);
router.delete("/directories/:id", deleteDirectory);

module.exports = router;
