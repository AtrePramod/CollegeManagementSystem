const express = require('express')
const { createUserModel, getAllUserModel, loginUserController } = require('../controller/userController')

//rest object
const router = express.Router()


//CRETAE USER ||POST
router.post('/register', createUserModel)

//GET USER ||GET
router.get('/alluser', getAllUserModel)
//Check USER ||POST
router.post('/login', loginUserController)

module.exports = router;