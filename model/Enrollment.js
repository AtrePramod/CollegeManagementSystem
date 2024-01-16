const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    EnrollmentID:
    {
        type: Number,
        required: [true, "EnrollmentID is required"],
        unique: true
    },
    StudentID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: [true, "StudentID is required"]
    },
    CourseID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: [true, "CourseID is required"]
    },
    EnrollmentDate:
    {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const enrollmentModel = mongoose.model('Enrollment', enrollmentSchema);
module.exports = enrollmentModel