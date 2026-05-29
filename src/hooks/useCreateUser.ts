import {  useState } from "react";
import { createUser } from "../services/user";
import { UserProps } from "../types/user";

export const useCreateUser = (onCreated?: (user: UserProps) => void) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try{
            setLoading(true)
            setError("")

            const newUser = await createUser({
                name,
                email
            })
            onCreated?.(newUser)

            setName("")
            setEmail("")

        }catch(error){
            setError(error instanceof Error ? error.message : "Error al crear el usuario")
        }finally{
            setLoading(false)
        }
    }

    return {
        name,
        email,
        loading,
        error,
        setName,
        setEmail,
        handleSubmit
    }
}
