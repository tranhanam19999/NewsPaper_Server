const express = require('express')

const controller = require('../controller/comment')

const router = express.Router()

router.get('/get', controller.getComment)
router.get('/getAll', controller.getAll)
router.get('/getById', controller.getById)
router.post('/update', controller.updateComment)
router.delete('/delete', controller.deletedComment)
module.exports = router