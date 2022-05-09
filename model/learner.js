const mongoose = require('mongoose')

const learnerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        min: 6,
        max: 255
    },
    email: {
        type:String,
        required:true,
        min: 6,
        max: 255
    },
    password: {
        type:String,
        required:true,
        min: 8,
        max: 50
    }
})

module.exports = mongoose.model("learner-data", learnerSchema)
