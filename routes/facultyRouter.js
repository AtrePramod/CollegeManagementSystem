const express = require("express")
const { createFacultyController, getAllFacultyController } = require("../controller/faculty")

const router = express.Router()

router.post("/new", createFacultyController)
router.get("/getAll", getAllFacultyController)

module.exports = router