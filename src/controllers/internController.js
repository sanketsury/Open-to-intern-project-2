const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")
const { isValid, isValidName, isValidMobile, isValidEmail } = require("../validations/validation");

const createInterns = async function (req, res) {
    try {
        const bodyData = req.body
        const { name, mobile, email, collegeName } = bodyData
        const obj = {}

        if (Object.keys(bodyData).length === 0) {
            return res.status(400).send({ status: false, message: "Please Enter Required Details" })
        }

        if (isValid(name) == false) {
            return res.status(400).send({ status: false, message: "name is required" });
        }
        if (isValidName.test(name) == false) {
            return res.status(400).send({ status: false, message: "Only alphabets are allowed in name" })
        }
        obj.name = name

        if (mobile) {
            if (!isValidMobile.test(mobile)) return res.status(400).send({ status: false, message: "Please Enter 10 digit Mobile Number" })
            const checkMobile = await internModel.findOne({ mobile: mobile })
            if (checkMobile) return res.status(400).send({ status: false, message: "Mobile Number already present please use another mobile number" })
            obj.mobile = mobile
        } else {
            return res.status(400).send({ status: false, message: "mobile number must be present" })
        }

        if (email) {
            if (!isValidEmail.test(email)) return res.status(400).send({ status: false, message: "Please Enter Valid Email ID" })
            const checkEmail = await internModel.findOne({ email: email })
            if (checkEmail) return res.status(400).send({ status: false, message: "Email ID already present please use another email Id" })
            obj.email = email
        } else {
            return res.status(400).send({ status: false, message: "email must be present" })
        }

        if (!collegeName) return res.status(400).send({ status: false, message: "Please Enter college name" })

        const takeCollegeId = await collegeModel.findOne({ name: collegeName }).select({ _id: 1 })
        if (!takeCollegeId) return res.status(404).send({ status: false, message: "College Not Found" })

        obj.collegeId = takeCollegeId

        const createData = await internModel.create(obj)
        return res.status(201).send({ status: true, data: createData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = createInterns