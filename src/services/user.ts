import { CreateUserProps } from "../types/createUser"
import { UserProps } from "../types/user"

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

export const getUsers = async (): Promise<UserProps[]>  => {
    const res = await fetch("/api/userRoute")
    const data = await parseJsonResponse(res)

    if (!res.ok) {
        throw new Error(data?.message ?? "Error al obtener los usuarios")
    }

    return Array.isArray(data) ? data : []
}


export const deleteUsers = async (id: string) =>{
    const response = await fetch(`/api/userRoute/${id}`, {
        method: "DELETE"
    })

    const data = await parseJsonResponse(response)

    return data
}

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
