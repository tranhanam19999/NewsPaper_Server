const express = require('express')

const controller = require('../controller/user')

const router = express.Router()

router.get('/get', controller.getUser)
router.get('/getAll', controller.getAll)
router.get('/getById', controller.getById)
router.post('/update', controller.updateUser)
router.delete('/delete', controller.deleteUser)
module.exports = router