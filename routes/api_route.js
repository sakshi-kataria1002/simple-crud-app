const router = require('express').Router()
const listenCONTROLLER = require('../controller/learner')
const courseCONTROLLER = require('../controller/course')
const verify = require('./authVerify')

// SIGNUP LEARNER
router.post('/signUp', listenCONTROLLER.signUp)

// LOGIN LEARNER
router.post('/logIn', listenCONTROLLER.logIn)

// GET ALL LEARNERS
router.get('/getAllUsers', verify, listenCONTROLLER.getAllUsers)

// CREATE COURSE
router.post('/createCourse', verify, courseCONTROLLER.createCourse)

// FETCH COURSE
router.get('/getCourse', verify, courseCONTROLLER.getCourse)

module.exports = router
