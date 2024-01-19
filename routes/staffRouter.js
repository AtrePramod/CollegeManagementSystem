const express = require("express")
const { createStaffContrller, getAllStaffContrller } = require("../controller/staffController")
const router = express.Router()

router.post("/new", createStaffContrller)
router.get("/getAll", getAllStaffContrller)

module.exports = router