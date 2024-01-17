const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connect to mongodb Database successful ${mongoose.connection.host}`)
    } catch (error) {
        console.log("MongoDB connect error: ", error)

    }
}
module.exports = connectDB;