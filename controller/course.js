const Course = require('../model/course')

exports.createCourse = (req,res) => {
    const course = new Course({
        courseId:req.body.courseId,
        courseName:req.body.courseName,
        courseDescription:req.body.courseDescription
    })
    course.save()
    .then(data => {res.send(data)})
    .catch(error => {res.send(error)})
}

exports.getCourse = (req,res) => {
    Course.find()
    .then(result => {
        res.send(result)
    })
    .catch(error => {
        res.send(400).send(error)
    })
}
