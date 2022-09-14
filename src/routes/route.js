const express = require('express');
const router = express.Router();
const createColleges = require("../controllers/collegeController")
const interController = require("../controllers/internController")

router.post("/functionup/colleges", createColleges)
router.post("/functionup/interns", interController.createInterns)

module.exports = router;