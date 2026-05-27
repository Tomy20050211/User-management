import { UserTableProps } from "../types/userTable";

export default function Table({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 font-semibold text-gray-700">ID</th>
            <th className="px-6 py-3 font-semibold text-gray-700">Nombre</th>
            <th className="px-6 py-3 font-semibold text-gray-700">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm text-gray-600">
                {user._id.slice(0, 8)}
              </td>

              <td className="px-6 py-4 font-medium text-gray-900">
                {user.name}
              </td>

              <td className="px-6 py-4 text-gray-700">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}