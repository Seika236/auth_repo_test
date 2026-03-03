import { useEffect, useState } from "react";
import type { IUser } from "../types/Models/IUser.ts";
import { UseRequest } from "../hooks/UseRequest.tsx";
import UserService from "../services/UserService.ts";

export function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  const { isLoading, fetchFunction } = UseRequest<IUser[], void>({
    request: UserService.getAllUsers,
    successCb: (data) => {
      setUsers(data);
    },
  });

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">{user.login}</h2>
            <p className="text-gray-700">{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}
