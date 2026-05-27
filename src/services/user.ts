import { UserProps } from "../types/user"

export const getUsers = async (): Promise<UserProps[]>  => {
    const res = await fetch("/api/userRoute")
    const data = await res.json()

    return data
}