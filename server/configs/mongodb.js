import mongoose from "mongoose"

const connectDBE=async()=>{
    await mongoose.connection.on('connected',()=>{
        console.log("Database Connceted");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/newbg-removal`)
}

export default connectDBE