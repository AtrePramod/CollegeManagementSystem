const enrollmentModel = require('../model/Enrollment')

exports.createEnrollmentController = async (req, res) => {
    try {
        const { EnrollmentID, StudentID, CourseID } = req.body
        if (!EnrollmentID || !StudentID || !CourseID) {

            return res.status(400).json({
                success: false,
                message: 'provide the all fields',
                error: err.message,
            });
        }
        const enroll = await new enrollmentModel({ EnrollmentID, StudentID, CourseID })
        await enroll.save();

        return res.status(201).json({
            success: true,
            message: 'student enroll successfully created',
            enroll
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in new enroll  callback',
            error: err.message,
        });
    }

}

exports.getAllEnrollController = async (req, res) => {
    try {
        const enroll = await enrollmentModel.find({})
        return res.status(201).json({
            success: true,
            message: 'all enroll getting successfully',
            enroll
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in get all eroll  callback',
            error: err.message,
        });
    }
}