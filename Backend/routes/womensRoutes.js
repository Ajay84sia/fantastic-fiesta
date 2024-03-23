const express = require("express");
const router = express.Router();
const womensController = require("../controllers/womensController");

// Route to retrieve all data from the 'mens' table
router.get("/", womensController.getAll);

module.exports = router;