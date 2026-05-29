import mongoose, { Schema } from "mongoose";

//Aqui estoy creando un esquema para la coleccion de mongo
const userSchema = new Schema({
    //Se pueden validar las propiedades
    name:{
        type: String,    //Le digo que es tipo string
        required: true,   //Le digo a mongo que que la propiedad
    },
    email: {
        type: String,
        required: true,
    }

})

export const User = 
mongoose.models.User || mongoose.model("User", userSchema)
