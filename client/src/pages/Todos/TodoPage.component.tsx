import { useParams } from "react-router-dom";
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

export const TodoPage = ({ theme, setTheme }) => {
  const { id } = useParams();
  const { token, user } = useUser();
  const [todo, setTodo] = useState();
  const todoId = Number(id);

  console.log("TODO:", todo);

  useEffect(() => {
    if (!token) return; // Prevent running if user/token is missing

    const fetchTodo = async () => {
      try {
        const fetchedTodo = await getTodo(token, todoId);
        if (fetchedTodo && fetchedTodo.length > 0) {
          setTodo(fetchedTodo[0]); // Ensure you're setting a valid object
          console.log("fetchedTodo: ", fetchedTodo[0]);
        }
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, [token, todoId]); // Added todoId to dependencies

  if (!todo) return <p>Loading...</p>; // Prevent rendering when todo is null
  const {
    completed,
    created_at,
    created_by,
    deleted,
    deleted_at,
    description,
    due_date,
    estemated_time,
    notes,
    priority,
    recurring_type,
    tags,
    title,
    updated_at,
  } = todo;
  console.log("description= ", description);

  console.log("title = ", title);
  // console.log("description = ", description);

  return (
    <PageContainer theme={theme} setTheme={setTheme}>
      <TodoContainer>
        <TodoLeftContainer>
          <h2>Title: {title}</h2>
        </TodoLeftContainer>
        <TodoRightContainer>
          {description && <p>Description: {description}</p>}
          {created_at && <p>created_at: {created_at}</p>}
          {created_by && <p>created_by: {created_by}</p>}
          {deleted && <p> {deleted ? "deleted" : "active"}</p>}
          {deleted_at && <p>deleted_at: {deleted_at}</p>}
          {estemated_time && <p>estemated_time: {estemated_time}</p>}
          {due_date && <p>due_date: {due_date}</p>}
          {notes && <p>notes: {notes}</p>}
          {priority && <p>priority: {priority}</p>}
          {recurring_type && <p>recurring_type: {recurring_type}</p>}
          {updated_at && <p>updated_at: {updated_at}</p>}
          {tags &&
            tags.map((tag) => {
              return <p>{tag}</p>;
            })}
        </TodoRightContainer>
      </TodoContainer>
    </PageContainer>
  );
};
