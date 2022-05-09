const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    course_id: {
        type:Number,
        required:true,
    },
    course_name: {
        type:String,
        required:true,
        min: 6,
        max: 255
    },
    course_description: {
        type:String,
        required:true,
        min: 8,
        max: 50
    }
})

module.exports = mongoose.model("course-data", courseSchema)
