const mongoose = require('mongoose')

const learnerSchema = new mongoose.Schema({
    listner_name: {
        type:String,
        required:true,
        min: 6,
        max: 255
    },
    listner_email: {
        type:String,
        required:true,
        min: 6,
        max: 255
    },
    listner_password: {
        type:String,
        required:true,
        min: 8,
        max: 50
    }
})

module.exports = mongoose.model("learner-data", learnerSchema)
