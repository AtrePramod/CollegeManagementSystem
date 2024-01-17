const express = require('express')
const { registerStudentController } = require('../controller/studentController')

//rest object
const router = express.Router()


//CRETAE USER ||POST
router.post('/register', registerStudentController)

module.exports = router;