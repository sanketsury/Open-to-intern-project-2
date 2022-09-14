const express = require('express');
const router = express.Router();
const createColleges = require("../controllers/collegeController")

router.post("/functionup/colleges", createColleges)

module.exports = router;