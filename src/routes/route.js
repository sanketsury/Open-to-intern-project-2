const express = require('express');
const router = express.Router();
const {createColleges,getCollegeDetails} = require("../controllers/collegeController")
const createInterns = require("../controllers/internController")

router.post("/functionup/colleges", createColleges)
router.post("/functionup/interns", createInterns)
router.get("/functionup/collegeDetails", getCollegeDetails)

module.exports = router;