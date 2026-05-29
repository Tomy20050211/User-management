"use client"

import { useCreateUser } from "@/src/hooks/useCreateUser"
import { UserProps } from "@/src/types/user"
import Button from "./Button"

interface UserFormProps {
    onCreated?: (user: UserProps) => void
}

export default function UserForm({ onCreated }: UserFormProps){
    const {name, email,loading, error, setName, setEmail, handleSubmit} = useCreateUser(onCreated)

    return(
        <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-md"
        >
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-gray-900">Crear usuario</h2>
                <p className="mt-1 text-sm text-gray-500">Agrega un nombre y correo para registrarlo en la lista.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
                <label className="block">
                    <span className="mb-2 block text-sm font-medium text-gray-700">Nombre</span>
                    <input
                        type="text"
                        placeholder="Ej: Tomas"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                        required
                    />
                </label>

                <label className="block">
                    <span className="mb-2 block text-sm font-medium text-gray-700">Email</span>
                    <input
                        type="email"
                        placeholder="correo@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                        required
                    />
                </label>

                <Button
                    type="submit"
                    text={loading ? "Creando..." : "Crear"}
                    disabled={loading}
                    className="h-11 bg-gray-900 text-white hover:bg-gray-800"
                />
            </div>

            {error && (
                <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {error}
                </p>
            )}
        </form>
    )
}
