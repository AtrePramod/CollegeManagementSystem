const express = require('express')
const { createUserModel, getAllUserModel } = require('../controller/userController')

//rest object
const router = express.Router()


//CRETAE USER ||POST
router.post('/register', createUserModel)

//GET USER ||GET
router.get('/alluser', getAllUserModel)

module.exports = router;