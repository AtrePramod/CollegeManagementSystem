const express = require('express')
const dotenv = require('dotenv')
const connectDB = require("./config/db")

dotenv.config()

const studentRoutes = require('./routes/studentRouters')
const departmentRoutes = require('./routes/departmentRouters')
const courseRoutes = require('./routes/coureseRouters')
const enrollRoutes = require('./routes/enrollmentRouter')


connectDB();

const app = express()

app.use(express.json())

app.use('/api/v1/student', studentRoutes)
app.use('/api/v1/department', departmentRoutes)
app.use('/api/v1/course', courseRoutes)
app.use('/api/v1/enroll', enrollRoutes)




const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`)
})
