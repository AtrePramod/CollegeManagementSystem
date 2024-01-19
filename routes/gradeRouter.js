const express = require("express")
const { createGradeController, getAllGradeController } = require("../controller/gradeController")

const router = express.Router()

router.post("/new", createGradeController)
router.get("/getAll", getAllGradeController)

module.exports = router