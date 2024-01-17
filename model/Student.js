const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    StudentID:
    {
        type: String,
        required: [true, "StudentID is required"],
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
        required: [true, "Lastname is required"]
    },
    DateOfBirth:
    {
        type: String
    },
    Email:
    {
        type: String,
        required: [true, "Email is required"]
    },
    PhoneNumber:
    {
        type: String
    }
}, { timestamps: true });

const studentModel = mongoose.model('Student', studentSchema)

module.exports = studentModel;