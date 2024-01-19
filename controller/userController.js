const userModel = require("../model/User")

exports.createUserModel = async (req, res) => {
    try {
        const { UserID, Username, Password, UserType, StudentID, StaffID } = req.body
        if (!UserID || !Username || !Password || !UserType) {
            return res.status(401).send({
                success: false,
                message: "Please provide all fields",
            })
        }
        const existingUser = await userModel.findOne({ Username });
        if (existingUser) {
            return res.status(409).send({
                success: false,
                message: 'User already exists',
            });
        }

        const user = await new userModel({ UserID, Username, Password, UserType, StudentID, StaffID })
        await user.save()
        return res.status(201).send({
            success: true,
            message: "user created successfully",
            user
        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            message: 'Error in new user callback',
            error: error
        });
    }
}

exports.getAllUserModel = async (req, res) => {
    try {
        const users = await userModel.find({})
        if (users) {
            return res.status(401).send({
                success: true,
                message: "all user getting successfully",
                users
            })
        }

    } catch (error) {
        return res.status(501).send({
            success: false,
            message: 'Error in get all user callback',
            error: error
        });
    }
}

exports.loginUserController = async (req, res) => {
    try {
        const { Username, Password, UserType } = req.body

        if (!Username || !Password || !UserType) {
            return res.status(401).send({
                success: false,
                message: "Please provide all fields"
            })
        }

        const user = await userModel.findOne({ Username: Username, UserType: UserType })
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "Invaild User",
            })
        }
        const isMatch = await userModel.findOne({ Username: Username, Password: Password })

        if (!isMatch) {
            return res.status(401).send(
                {
                    success: false,
                    message: "Invalid Username and password"
                }
            )
        }
        return res.status(200).send({
            success: true,
            message: "Login successfully",
            isMatch
        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            message: 'Error in get all user callback',
            error: error.message
        });
    }
}