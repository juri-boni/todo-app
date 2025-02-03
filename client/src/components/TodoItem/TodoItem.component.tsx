import React from "react";
import { deleteTodo } from "../../services/todosService";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import {
  TodoContainer,
  TodoItemContainer,
  TodoText,
  TodoElement,
  DeleteButton,
} from "./TodoItem.styles";

export const TodoItem = ({ todo }) => {
  const { token } = useUser();
  // const todoId = todo.id;
  const {
    id,
    title,
    user_id,
    created_by,
    deleted,
    completed,
    description,
    due_date,
    estimated_time,
    notes,
    priority,
    recurring_type,
    tags,
  } = todo;

  const handleDelete = async () => {
    console.log("deleting todo ", id);
    try {
      const response = await deleteTodo(token ?? "", id);
      console.log("DELETING TODO: REPONSE = ", response);
    } catch (error) {
      console.error("error trying to delete a todo ", error);
    }
  };

  return (
    <TodoContainer>
      <TodoItemContainer key={id} deleted={deleted}>
        <Link to={`/profile/mytodo/${id}`}>
          <TodoText> {title}</TodoText>
        </Link>
        {/* <TodoElement>DESCRIPTION: {description}</TodoElement>
        <TodoElement>CREATED BY: {created_by}</TodoElement>
        <TodoElement>
          {completed ? "completed" : "to be completed"}{" "}
        </TodoElement>
        <TodoElement>NOTES: {notes}</TodoElement>
        <TodoElement>PRIORITY: {priority} </TodoElement>
        <TodoElement>{deleted ? "deleted" : "active"}</TodoElement> */}
      </TodoItemContainer>
      {!deleted && (
        <DeleteButton onClick={() => handleDelete()} deleted={deleted}>
          Delete Todo
        </DeleteButton>
      )}

      {deleted && <DeleteButton deleted={deleted}>Recover Todo</DeleteButton>}
    </TodoContainer>
  );
};
