import { NextResponse, NextRequest } from "next/server";
import { User } from "@/src/models/User";
import { connectDB } from "@/src/lib/mongoose";


export async function GET () {
    try{
        await connectDB()

        const users = await User.find()

        return NextResponse.json(users)

    }catch(error){
      return NextResponse.json(
        {message: error instanceof Error ? error.message : "Error al obtener los usuarios"},
        {status: 500}
      )
    }
};



export async function POST (request: NextRequest){
    try {
      await connectDB()
      
      const body = await request.json()

      if (!body.name || !body.email) {
        return NextResponse.json(
          {message: "Nombre y email son obligatorios"},
          {status: 400}
        )
      }

      const newUser = await User.create({
        name: body.name,
        email: body.email
      })

      return NextResponse.json(newUser, {status: 201})
    } catch (error) {
      return NextResponse.json(
        {message: error instanceof Error ? error.message : "Error al crear el usuario"},
        {status: 500}
      )
    }
};


