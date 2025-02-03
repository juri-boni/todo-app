import React, { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useTodos } from "../../hooks/useTodos";
import { getAllTodos } from "../../services/todosService";
import { UserContainer, UserSidebar, ThemeToggleButton } from "./User.styles";
import { TodoList } from "../../components/TodoList/TodoList.component";
import { PageContainer } from "../../components/PageContainer/PageContainer.component";

export const User = ({ theme, setTheme, toggleTheme }) => {
  const { token, user } = useUser(); // Single call to useUser()
  const { todos, setTodos } = useTodos();
  useEffect(() => {
    console.log("USER - theme = ", theme);
  }, [theme]);

  useEffect(() => {
    if (!token || !user?.id) return; // Prevent running if user/token is missing

    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getAllTodos(token, user.id);
        console.log(fetchedTodos);
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [token, user?.id]); // Added dependencies

  return (
    <PageContainer sidebarTitle={`${user?.username} sidebar`}>
      {/* <UserSidebar>
        <ul>
          <ThemeToggleButton onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
          </ThemeToggleButton>
          <li>Info</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </UserSidebar> */}
      <div>
        {/* <h2>My Todo List</h2> */}
        <TodoList />
      </div>
    </PageContainer>
  );
};
