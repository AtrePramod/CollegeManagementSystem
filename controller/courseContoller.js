const courseModel = require('../model/Course')

exports.createCourseController = async (req, res) => {
    try {
        const { CourseID, CourseName, Credits, DepartmentID } = req.body
        if (!CourseID || !CourseName || !Credits || !DepartmentID) {

            return res.status(400).send({
                success: false,
                message: 'provide the all fields'
            });
        }
        const coures = await new courseModel({ CourseID, CourseName, Credits, DepartmentID })
        await coures.save();

        return res.status(201).send({
            success: true,
            message: 'course successfully created',
            coures
        });


    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in new course  callback',
            error: err.message,
        });
    }

}

exports.getAllCoureseController = async (req, res) => {
    try {
        const course = await courseModel.find({})
        return res.status(201).send({
            success: true,
            message: 'all courses getting successfully',
            course
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in get all courses  callback',
            error: err.message,
        });
    }
}