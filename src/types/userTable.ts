import { UserProps } from "./user"

export interface UserTableProps {
    users: UserProps[],
    onDelete: (id: string) => void,
    deleteButtonClassName?: string
}
