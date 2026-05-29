import { CreateUserProps } from "../types/createUser"
import { UserProps } from "../types/user"

//Peticion HTTP para pedir todos los documentos
const parseJsonResponse = async (response: Response) => {
    const text = await response.text()

    if (!text) {
        return null
    }

    try {
        return JSON.parse(text)
    } catch {
        return { message: text }
    }
}

//Funcion que permite hacer una peticion HTTP a mi API para pedirle que borre un documento
export const getUsers = async (): Promise<UserProps[]>  => {
    const res = await fetch("/api/userRoute")
    const data = await parseJsonResponse(res)

    if (!res.ok) {
        throw new Error(data?.message ?? "Error al obtener los usuarios")
    }

    return Array.isArray(data) ? data : [] //uso un ternario para validar si data realmente es un array, usando la funcion de JS
}

//Le pido a mi API que elimine un documento por su ID, desde la catpeta dinamica 
export const deleteUsers = async (id: string) =>{
    const response = await fetch(`/api/userRoute/${id}`, {
        method: "DELETE"
    })

    const data = await parseJsonResponse(response)

    return data
}


//Le pido a mi API que genero un documento nuevo 
export const createUser = async (data: CreateUserProps): Promise<UserProps> =>{
    const response = await fetch("/api/userRoute",{
        method: "POST",
        headers: {
            "Content-type": "application/json"    
        },

        body: JSON.stringify(data)
    })

    const newUser = await parseJsonResponse(response)

    if (!response.ok) {
        throw new Error(newUser?.message ?? "Error al crear el usuario")
    }

    return newUser
}
