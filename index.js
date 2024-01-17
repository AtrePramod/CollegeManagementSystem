const express = require('express')
const dotenv = require('dotenv')
const connectDB = require("./config/db")

//dotenv config
dotenv.config()

//router import
const studentRoutes = require('./routes/studentRouters')
const departmentRoutes = require('./routes/departmentRouters')


//mongodb connection
connectDB();

//rest object
const app = express()

//middelwares 
app.use(express.json())

//routes
app.use('/api/v1/student', studentRoutes)
app.use('/api/v1/department', departmentRoutes)




const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`)
})
