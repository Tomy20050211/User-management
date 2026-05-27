import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI!

export const connectDB = async () =>{
    try{
        await mongoose.connect(mongodbUri)
        console.log("conectado papu")
    } catch(error){
        console.log(error)

        throw new Error ("error al conectar a la db")
    }
}