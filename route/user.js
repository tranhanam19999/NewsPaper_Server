const express = require('express')

const controller = require('../controller/user')

const router = express.Router()

router.get('/get', controller.getUser)
router.get('/getAll', controller.getAllUser)
router.get('/getById', controller.getById)
router.post('/create', controller.createUser)
router.post('/update', controller.updateUser)
router.delete('/delete', controller.deleteUser)
module.exports = router