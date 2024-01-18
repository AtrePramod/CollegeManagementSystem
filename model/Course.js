const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    CourseID:
    {
        type: String,
        required: [true, "CourseID is required"],
        unique: true
    },
    CourseName:
    {
        type: String,
        required: [true, "CourseName is required"]
    },
    Credits:
    {
        type: String,
        required: [true, "Credits is required"]
    },
    DepartmentID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: [true, "DepartmentID is required"]
    }
}, { timestamps: true });


const courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;