const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    FacultyID:
    {
        type: Number,
        required: [true, "Faculty is required"],
        unique: true
    },
    FirstName:
    {
        type: String,
        required: [true, "FirstName is required"]
    },
    LastName:
    {
        type: String,
        required: [true, "LastName is required"]
    },
    Email:
    {
        type: String,
        required: [true, "Email is required"]
    },
    PhoneNumber:
    {
        type: String
    },
    DepartmentID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: [true, "DepartmentID is required"]
    }
}, { timestamps: true });

const facultyModel = mongoose.model('Faculty', facultySchema);
module.exports = facultyModel;