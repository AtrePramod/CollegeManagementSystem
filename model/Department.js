const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    DepartmentID:
    {
        type: String,
        required: [true, "DeparmentID is required"],
        unique: true
    },
    DepartmentName:
    {
        type: String,
        required: [true, "DepartmentName is required"]
    }
}, { timestamps: true });

const departmentModel = mongoose.model('Department', departmentSchema);
module.exports = departmentModel