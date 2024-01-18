const staffModel = require("../model/Staff")

exports.createStaffContrller = async (req, res) => {
    try {
        const { StaffID, FirstName, LastName, Email, PhoneNumber, DepartmentID } = req.body
        if (!StaffID || FirstName || !LastName || !Email || !PhoneNumber || !DepartmentID) {
            return res.status(401).send({
                success: false,
                message: "Please provide the all fields"
            })
        }

        const existingUser = await staffModel.findOne({ Email });
        if (existingUser) {
            return res.status(409).send({
                success: false,
                message: 'Staff email already exists',
            });
        }

        const staff = await new staffModel({ StaffID, FirstName, LastName, Email, PhoneNumber, DepartmentID })
        await staff.save()

        returnres.status(201).send({
            success: true,
            message: "created new staff successfully",
            staff
        })


    } catch (error) {
        return res.status(501).send({
            success: false,
            message: "Error in the new creating staff",
            error: error
        })
    }
}
exports.getAllStaffContrller = async (req, res) => {
    try {
        const staffs = await staffModel.find({})
        return res.status(201).send({
            success: true,
            message: "getting all staff successfully",
            staffs
        })
    } catch (error) {
        return res.status(501).send({
            success: false,
            message: "error in get all staff callback",
            error: error
        })
    }
}