const express = require('express')
const { createDepartmentController, getAllDepartController } = require('../controller/departmentController')

const router = express.Router()

//CRETAE DEP ||POST
router.post('/new', createDepartmentController)

//get DEP ||GET
router.get('/getall', getAllDepartController)

module.exports = router