const studentModel = require('../model/Student');

exports.registerStudentController = async (req, res) => {
    try {
        const { StudentID, FirstName, LastName, DateOfBirth, Email, PhoneNumber } = req.body;

        // Validation
        if (!StudentID || !FirstName || !LastName || !Email) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all fields',
                Email: Email,
            });
        }

        // Existing user check
        const existingUser = await studentModel.findOne({ Email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Student email already exists',
            });
        }

        // Save new student
        const newStudent = new studentModel({ StudentID, FirstName, LastName, DateOfBirth, Email, PhoneNumber });
        await newStudent.save();

        return res.status(201).json({
            success: true,
            message: 'New student created',
            stud: newStudent,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Error in student register callback',
            error: err.message,  
            stack: err.stack,
        });
    }
};
