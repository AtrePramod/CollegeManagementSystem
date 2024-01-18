const facultyModel = require("../model/Faculty")
exports.createFacultyController = async (req, res) => {
    try {
        const { FacultyID, FirstName, LastName, Email, PhoneNumber, DepartmentID } = req.body
        if (!FacultyID || !FirstName || !LastName || !Email || !PhoneNumber || !DepartmentID) {
            return res.status(401).send({
                success: false,
                mesaage: "please provide all fields",
            })
        }
        const existingUser = await facultyModel.findOne({ Email });
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: 'faculty email already exists',
            });
        }

        const faculty = await new facultyModel({ FacultyID, FirstName, LastName, Email, PhoneNumber, DepartmentID })
        await faculty.save()
        return res.status(201).send({
            success: true,
            message: "successfully faculty created",
            faculty
        })
    } catch (error) {
        return res.status(401).send({
            success: false,
            mesaage: "Error in new faculty callback",
            error: error
        })
    }

}

exports.getAllFacultyController = async (req, res) => {
    try {
        const facultys = await facultyModel.find({})
        return res.status(201).send({
            success: true,
            message: "getting all faculty successfully",
            facultys
        })

    } catch (error) {
        return res.status(401).send({
            success: false,
            mesaage: "Error in get all faculty callback",
            error: error
        })
    }
}