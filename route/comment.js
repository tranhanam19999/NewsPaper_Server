const express = require('express')

const controller = require('../controller/comment')

const router = express.Router()

router.get('/get', controller.getComment)

module.exports = router