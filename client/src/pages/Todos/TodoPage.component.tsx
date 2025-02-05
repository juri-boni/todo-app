import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { getTodo } from "../../services/todosService";

import { PageContainer } from "../../components/PageContainer/PageContainer.component";
import {
  TodoContainer,
  TodoLeftContainer,
  TodoRightContainer,
  CheckboxCompleted,
} from "./TodoPage.styles";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
export const TodoPage = ({ theme, setTheme }) => {
  const { id } = useParams();
  const { token, user } = useUser();
  const [todo, setTodo] = useState(null);
  const todoId = Number(id);

  useEffect(() => {
    if (!token) return; // Prevent running if user/token is missing

    const fetchTodo = async () => {
      try {
        const fetchedTodo = await getTodo(token, todoId);
        if (fetchedTodo && fetchedTodo.length > 0) {
          setTodo(fetchedTodo[0]); // Ensure you're setting a valid object
        }
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, [token, todoId]); // Added todoId to dependencies

  if (!todo) return <p>Loading...</p>; // Prevent rendering when todo is null
  const { title } = todo;
  console.log("title = ", title);
  // console.log("description = ", description);

  return (
    <PageContainer theme={theme} setTheme={setTheme}>
      <TodoContainer>
        <TodoLeftContainer>
          <h2>Title: {title}</h2>
          <CheckboxCompleted fontSize={"large"}></CheckboxCompleted>
          {/* <CheckBoxIcon fontSize={"large"}></CheckBoxIcon> */}
        </TodoLeftContainer>
        <TodoRightContainer>
          {todo.description && <p>Description {todo.description}</p>}
          {todo.created_at && <p>created_at {todo.created_at}</p>}
          {todo.description && <p>Description {todo.description}</p>}
          {todo.description && <p>Description {todo.description}</p>}
          <p>{todo.created_at}</p>
          <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
        </TodoRightContainer>
      </TodoContainer>
    </PageContainer>
  );
};
