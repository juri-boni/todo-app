import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { User } from "../../types/types";
import { PageContainer } from "../../components/PageContainer/PageContainer.component";
import { getAllUsers } from "../../services/usersService";
import { UsersTable } from "./Admin.styles";

interface AdminProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Admin: React.FC<AdminProps> = ({ theme, setTheme }) => {
  const { user, token } = useUser();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    <PageContainer
      sidebarTitle={"Admin Panel"}
      theme={theme}
      setTheme={setTheme}
    >
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
    </PageContainer>
  );
};
