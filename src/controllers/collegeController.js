const collegeModel = require("../models/collegeModel");
const { isValid, isValidURL } = require("../validations/validation");
const checkName = require("validator");



const createColleges = async function (req, res) {
    try {
        const { name, fullName, logoLink, isDeleted } = req.body;
        if (Object.entries(req.body).length == 0) {
            return res.status(400).send({ status: false, message: "Data should be provided" })
        }
        if (isValid(name) == false) {
            return res.status(400).send({ status: false, msg: "Short name is required" });
        }
        if (checkName.isAlpha(name) == false) {
            return res.status(400).send({ status: false, message: "Only alphabets are allowed in name" })
        }
        if (isValid(fullName) == false) {
            return res.status(400).send({ status: false, msg: "College name is required" });
        }
        if (checkName.isAlpha(fullName) == false) {
            return res.status(400).send({ status: false, message: "Only alphabets are allowed in college name" })
        }
        if (isValid(logoLink) == false) {
            return res.status(400).send({ status: false, msg: "Logo link is required" });
        }
        if (isValidURL(logoLink) == false) {
            return res.status(400).send({ status: false, msg: "URL is wrong" });
        }

        const duplicate = await collegeModel.findOne({name:name});
        if(duplicate.name==name){
            return res.status(400).send({ status: false, msg: "The college is already present" });
        }

        const colleges = await collegeModel.create(req.body);
        return res.status(201).send({ status: true, data: colleges });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = createColleges