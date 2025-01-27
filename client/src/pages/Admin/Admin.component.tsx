import React, { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
import { User } from "../../types/types";
import { getAllUsers } from "../../services/usersService";
import { AdminContainer, Sidebar, UsersTable } from "./Admin.styles";

export const Admin = () => {
  const { user, setUser } = useUser();
  const { token } = useUser();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // const token = user?.token;
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await getAllUsers(token ?? "");
        setUsers(response);
      } catch (err) {
        setError("Failed to fetch users.");
        console.error("Error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [user, token]);

  return (
    <AdminContainer>
      <Sidebar>
        <h3>Admin Panel</h3>
        <ul>
          <li>Manage Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </Sidebar>
      {isLoading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}
      <UsersTable>
        <h2>All Users</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </UsersTable>
    </AdminContainer>
  );
};
