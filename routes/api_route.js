const router = require('express').Router()
const listenCONTROLLER = require('../controller/learner')
const courseCONTROLLER = require('../controller/course')
const verify = require('./learnerVerify')

// SIGNUP LEARNER
router.post('/signUp', listenCONTROLLER.signUp)

// LOGIN LEARNER
router.post('/logIn', listenCONTROLLER.logIn)

// GET ALL LEARNERS
router.get('/getAll', verify, listenCONTROLLER.getAllUsers)

// CREATE COURSE
router.post('/createCourse', courseCONTROLLER.createCourse)

// FETCH COURSE
router.get('/getCourse', courseCONTROLLER.getCourse)

module.exports = router
