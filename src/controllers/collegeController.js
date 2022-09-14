const collegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");
const { isValid, isValidUrl, isValidName } = require("../validations/validation");



const createColleges = async function (req, res) {
    try {
        const { name, fullName, logoLink, isDeleted } = req.body;
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({ status: false, message: "Data should be provided" })
        }
        if (isValid(name) == false) {
            return res.status(400).send({ status: false, msg: "Short name is required" });
        }
        if (isValidName.test(name) == false) {
            return res.status(400).send({ status: false, message: "Only alphabets are allowed in name" })
        }
        if (isValid(fullName) == false) {
            return res.status(400).send({ status: false, msg: "College name is required" });
        }
        if (isValidName.test(fullName) == false) {
            return res.status(400).send({ status: false, message: "Only alphabets are allowed in college name" })
        }
        if (isValid(logoLink) == false) {
            return res.status(400).send({ status: false, msg: "Logo link is required" });
        }
        if (isValidUrl.test(logoLink) == false) {
            return res.status(400).send({ status: false, msg: "URL is wrong" });
        }

        const duplicate = await collegeModel.findOne({ name: name });
        if (duplicate) {
            return res.status(400).send({ status: false, msg: "The college is already present" });
        }

        const colleges = await collegeModel.create(req.body);
        return res.status(201).send({ status: true, data: colleges });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const getCollegeDetails = async function (req, res) {
    try {
        const obj = {}
        const collegeName = req.query.collegeName
        if (!collegeName) return res.status(400).send({ status: false, msg: "Please enter college Name" })

        const collegeID = await collegeModel.findOne({ name: collegeName }).select({ _id: 1 })
        if (!collegeID) return res.status(404).send({ status: false, msg: "College Not Found" })

        const internData = await internModel.find({ collegeId: collegeID }).select({ _id: 1, name: 1, email: 1, mobile: 1 })
        const getData = await collegeModel.findOne({ name: collegeName })

        obj.name = getData.name
        obj.fullName = getData.fullName
        obj.logoLink = getData.logoLink
        obj.interns = internData
        if ((obj.interns).length == 0) return res.status(404).send({ status: false, data: obj, msg: "There is no such intern in this college" })
        res.status(200).send({ status: true, data: obj })
    }
    catch (err) {
        return res.status(500).send({ status: false, data: err.message });
    }
}

module.exports.createColleges = createColleges
module.exports.getCollegeDetails = getCollegeDetails