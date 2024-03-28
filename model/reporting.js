const mongoose = require("mongoose")

const reportingSchema = new mongoose.Schema({
    name: String,

});

module.exports = mongoose.model('reporting', reportingSchema);