import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useTodos } from "../../hooks/useTodos";
import { getAllTodosByUserId } from "../../services/todosService";
import "./User.styles";
import { TodoList } from "../../components/TodoList/TodoList.component";
import { PageContainer } from "../../components/PageContainer/PageContainer.component";

export const User = ({ theme, setTheme }) => {
  const { token, user } = useUser();
  const { setTodos } = useTodos();

  useEffect(() => {
    if (!token || !user?.id) return;

    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getAllTodosByUserId(token, user.id);
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [token, user?.id]);

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
