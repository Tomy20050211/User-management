import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI!

export const connectDB = async () =>{
    try{
        if (!mongodbUri) {
            throw new Error("Falta configurar MONGODB_URI en .env.local")
        }

        await mongoose.connect(mongodbUri)
        console.log("conectado papu")
    } catch(error){
        console.log(error)

        throw error instanceof Error ? error : new Error ("error al conectar a la db")
    }
}
