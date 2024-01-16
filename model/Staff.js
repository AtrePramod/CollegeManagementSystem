const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    StaffID:
    {
        type: Number,
        required: [true, "StaffId is required"],
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
        required: [true, "Department is required"]
    }
}, { timestamps: true });

const staffModel = mongoose.model('Staff', staffSchema);

module.exports = staffModel;