const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const interController = require("../controllers/internController")

router.post("/functionup/colleges", collegeController.createColleges)
router.post("/functionup/interns", interController.createInterns)
router.get("/functionup/collegeDetails", collegeController.getCollegeDetails)

module.exports = router;