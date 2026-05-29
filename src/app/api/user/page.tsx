'use client'
import { getUsers } from "@/src/services/user";
import { deleteUsers } from "@/src/services/user";
import { useEffect, useState } from "react";
import type { UserProps } from "@/src/types/user";
import Table from "@/src/components/ui/TableUsers";
import UserForm from "@/src/components/ui/FormUsers";



const User = () => {
    //Uso un estado donde se guardara mi lista de usuarios, inicialmente es un array vacio
    const [users, setUsers] = useState<UserProps[]>([])


    const handleDelete = async(id:string) => {

        await deleteUsers(id)

        setUsers((prev) => prev.filter(user => user._id !== id))
    }

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getUsers()  //Espero la respuesta de getUsers
                setUsers(result) //Y la guardo en mi estado
            } catch (error) {
                console.error(error)
                setUsers([])
            }
        }

        void fetchData()
    }, [])
  
    console.log(users)
    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="mx-auto max-w-5xl space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-950">Users Table</h1>
                    <p className="mt-2 text-sm text-gray-600">Administra los usuarios registrados.</p>
                </div>

                <UserForm onCreated={(user) => setUsers((prev) => [user, ...prev])} />

                <Table
                    users={users}
                    onDelete={handleDelete}
                    deleteButtonClassName="bg-red-600 text-white hover:bg-red-700"
                />
            </div>
        </main>
    )
}

export default User
