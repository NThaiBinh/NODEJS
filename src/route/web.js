const express = require('express')
const router = express.Router()
const { renderHomePage } = require('../controllers/homeController')
const { renderCourses } = require('../controllers/courseController')


router.get('/', renderHomePage)
router.get('/courses', renderCourses)


module.exports = router;