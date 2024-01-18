const gradeModel = require("../model/Grade")

exports.createGradeController = async (req, res) => {
    try {
        const { GradeID, EnrollmentID, GradeValue } = req.body
        if (!GradeID || !EnrollmentID || !GradeValue) {
            return res.status(401).send({
                success: false,
                message: "Please provide all fields"
            })
        }
        const grade = await new gradeModel({ GradeID, EnrollmentID, GradeValue })
        await grade.save()

        return res.status(201).send({
            success: true,
            message: "new grade created successfully",
            grade
        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            message: "Error in new grade callback",
            error: error
        })
    }

}

exports.getAllGradeController = async (req, res) => {

    try {
        const grades = await gradeModel.find({})
        return res.status(201).send({
            succes: true,
            message: "getting all grades successfully",
            grades
        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            meassage: "error in getting all grade callback",
            error: error
        })
    }
}