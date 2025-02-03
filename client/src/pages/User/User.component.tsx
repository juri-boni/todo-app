import React, { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useTodos } from "../../hooks/useTodos";
import { getAllTodos } from "../../services/todosService";
import { UserContainer, UserSidebar, ThemeToggleButton } from "./User.styles";
import { TodoList } from "../../components/TodoList/TodoList.component";
import { PageContainer } from "../../components/PageContainer/PageContainer.component";

export const User = ({ theme, setTheme }) => {
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
    <PageContainer
      sidebarTitle={`${user?.username} sidebar`}
      theme={theme}
      setTheme={setTheme}
    >
      <div>
        <TodoList />
      </div>
    </PageContainer>
  );
};
