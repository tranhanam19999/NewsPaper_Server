const express = require('express')

const controller = require('../controller/article')

const router = express.Router()

router.get('/get', controller.getArticle)

module.exports = router