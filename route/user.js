const express = require('express')

const controller = require('../controller/user')

const router = express.Router()

router.get('/get', controller.getUser)

module.exports = router