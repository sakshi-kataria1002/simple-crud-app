const Course = require('../model/course')

exports.createCourse = async (req,res) => {
    const courseExist = await Course.findOne({course_id:req.body.course_id})

    if(courseExist){
        res.send("Course already exist")
    }

    try {
        const course = new Course({
            course_id:req.body.course_id,
            course_name:req.body.course_name,
            course_description:req.body.course_description
        })
        const saveCourse = await course.save()
        res.status(200).send('Course saved')
    } catch(error) {
        res.send(error)
    }
}

exports.getCourse = async (req,res) => {
    const allCourse = await Course.find()
    try {
        res.send(allCourse)
    }catch(error) {
        res.send(error)
    }
}
