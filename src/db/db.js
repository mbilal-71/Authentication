const mongoose = require('mongoose')

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('mongodb connected successfully')
    }
    catch (error) {
        console.error('mongodb connection failed: ', error)
    }
}

module.exports = connectDB
