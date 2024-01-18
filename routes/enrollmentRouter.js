const express = require('express')
const { createEnrollmentController, getAllEnrollController } = require('../controller/entrollmentController')

const router = express.Router()

//CRETAE DEP ||POST
router.post('/new', createEnrollmentController)

//get DEP ||GET
router.get('/getall', getAllEnrollController)

module.exports = router