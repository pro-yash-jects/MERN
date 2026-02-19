const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/myapp')
        console.log("Database Connected")
    }catch (err) {
        // console.log('Error', err)
        console.log("Database connection failed")
    }
}

module.exports = connectDB;
