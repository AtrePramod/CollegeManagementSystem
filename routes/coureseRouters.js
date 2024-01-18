const express = require('express')
const { createCourseController, getAllCoureseController } = require('../controller/courseContoller')

const router = express.Router()

//CRETAE COURSE ||POST
router.post('/new', createCourseController)

//get GET COURES ||GET
router.get('/getall', getAllCoureseController)

module.exports = router