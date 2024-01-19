const express = require('express')
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const cors = require('cors');

dotenv.config()

const studentRoutes = require('./routes/studentRouters')
const departmentRoutes = require('./routes/departmentRouters')
const courseRoutes = require('./routes/coureseRouters')
const enrollRoutes = require('./routes/enrollmentRouter')
const facultyRoutes = require('./routes/facultyRouter')
const gradesRoutes = require('./routes/gradeRouter')
const staffRoutes = require('./routes/staffRouter')
const userRoutes = require('./routes/userRouter')


connectDB();

const app = express()
app.use(cors());
app.use(express.json())

app.use('/api/v1/student', studentRoutes)
app.use('/api/v1/department', departmentRoutes)
app.use('/api/v1/course', courseRoutes)
app.use('/api/v1/enroll', enrollRoutes)
app.use('/api/v1/faculty', facultyRoutes)
app.use('/api/v1/grade', gradesRoutes)
app.use('/api/v1/staff', staffRoutes)
app.use('/api/v1/user', userRoutes)




const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`)
})
