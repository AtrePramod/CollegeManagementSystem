const express = require('express')
const { registerStudentController, gettAllStudentController } = require('../controller/studentController')

//rest object
const router = express.Router()


//CRETAE STUDENT ||POST
router.post('/register', registerStudentController)

//GET STUDENT ||GET
router.get('/allStudent', gettAllStudentController)

module.exports = router;