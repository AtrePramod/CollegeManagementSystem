const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    GradeID:
    {
        type: String,
        required: [true, "GradeID is required"],
        unique: true
    },
    EnrollmentID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment',
        required: [true, "EnrollmentID is required"]
    },
    GradeValue:
    {
        type: String,
        required: [true, "GradeValue is required"]
    }
}, { timestamps: true });

const gradeModel = mongoose.model('Grade', gradeSchema);
module.exports = gradeModel