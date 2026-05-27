import { NextResponse } from "next/server";
import { User } from "@/src/models/User";
import { connectDB } from "@/src/lib/mongoose";

export async function GET () {
    try{
        await connectDB()

        const users = await User.find()

        return NextResponse.json(users)

    }catch(error){
      return NextResponse.json(
        {message: "Error al obtener los usuarios"},
        {status: 500}
      )
    }
};

export async function POST (){
    await connectDB()

    const user = await User.create({
        name: "Thomas Salazar Ruiz",
        email: "tomasruiz@gmal.com"
    })

    return NextResponse.json(user)
}