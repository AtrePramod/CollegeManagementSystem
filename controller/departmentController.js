const departmentModel = require('../model/Department')

exports.createDepartmentController = async (req, res) => {
    try {
        const { DepartmentID, DepartmentName } = req.body
        if (!DepartmentID || !DepartmentName) {

            return res.status(400).send({
                success: false,
                message: 'provide the all fields',
                error: err.message,
            });
        }
        const dept = await new departmentModel({ DepartmentID, DepartmentName })
        await dept.save();

        return res.status(201).send({
            success: true,
            message: 'department successfully created',
            dept
        });


    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in new department  callback',
            error: err.message,
        });
    }

}

exports.getAllDepartController = async (req, res) => {
    try {
        const departments = await departmentModel.find({})
        return res.status(201).send({
            success: true,
            message: 'all department getting successfully',
            departments
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in get all department  callback',
            error: err.message,
        });
    }
}