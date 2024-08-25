const express = require('express')
const router = express.Router()
const { renderHomePage } = require('../controllers/homeController')
const { createUser } = require('../controllers/createUserController')
const { postCreateUser } = require('../controllers/postCreateUserController')


router.get('/', renderHomePage)
router.get('/create-user', createUser)
router.post('/post-info-user', postCreateUser)

module.exports = router;