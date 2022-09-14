const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const InternSchema = new mongoose.Schema(
     {
          name: {
               type: String,
               required: true
          },
          email: {
               type: String,
               required: true,
               unique: true
          },
          mobile: {
               type: String,
               required: true,
               unique: true
          },

          collegeId: {
               type: ObjectId,
               ref: "P-College",
          },
          isDeleted: {
               type: boolean,
               default: false
          }
     },

     { timestamps: true });

module.exports = mongoose.model("P-Intern", InternSchema)