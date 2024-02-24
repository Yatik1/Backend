import mongoose from "mongoose"

const connectDB = async () => {
    try { 
        const db = await mongoose.connect(process.env.MONGODB_URL || 8000)
        console.log(`Database is connected on : ${db.connection.host}`)
    } catch (error) {
        console.log("Error : " , error)
        process.exit(1)
    }
}

 export default connectDB