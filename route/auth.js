const express = require('express')

const controller = require('../controller/auth')

const router = express.Router()

router.get('/login', controller.checkUser)
module.exports = router