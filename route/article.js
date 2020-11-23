const express = require('express')

const controller = require('../controller/article')

const router = express.Router()

router.get('/get', controller.getArticle)
router.get('/getAll', controller.getAll)
router.get('/getById', controller.getById)
router.post('/update', controller.updateArticle)
router.delete('/delete', controller.deletedArticle)
module.exports = router