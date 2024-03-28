const mongoose = require("mongoose")

const applicantSchema = new mongoose.Schema({
    name: String,
    dob:Date,
    mobileNo: String,
    email: String,
    department: String,
    joining:String,
    reporting:String,
    expirience: Number,
    salary: Number,
    linkedin: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('applicants', applicantSchema);