const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserID:
    {
        type: String,
        required: [true, "UserID is required"],
        unique: true
    },
    Username:
    {
        type: String,
        required: [true, "UserName is required"],
        unique: true
    },
    Password:
    {
        type: String,
        required: [true, "Password is required"]
    },
    UserType:
    {
        type: String,
        enum: ['Student', 'Staff'],
        required: [true, "UserType is required"]
    },
    StudentID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    StaffID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    }
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel