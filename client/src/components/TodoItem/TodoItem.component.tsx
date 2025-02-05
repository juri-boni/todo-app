import React, { useState } from "react";
import { deleteTodo } from "../../services/todosService";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import {
  TodoContainer,
  TodoItemContainer,
  TodoText,
  // TodoElement,
  DeleteButton,
  CheckboxCompleted,
  CheckboxPending,
} from "./TodoItem.styles";

export const TodoItem = ({ todo }) => {
  const { token } = useUser();
  const [isCompleted, setIsCompleted] = useState(false);
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
    // console.log("deleting todo ", id);
    try {
      const response = await deleteTodo(token ?? "", id);
      // console.log("DELETING TODO: REPONSE = ", response);
    } catch (error) {
      console.error("error trying to delete a todo ", error);
    }
  };

  const toggleIsCompleted = () => setIsCompleted(!isCompleted);

  return (
    <TodoContainer>
      {isCompleted && (
        <CheckboxCompleted
          // fontSize={"large"}
          color={"primary"}
          onClick={toggleIsCompleted}
        ></CheckboxCompleted>
      )}
      {!isCompleted && (
        <CheckboxPending onClick={toggleIsCompleted}></CheckboxPending>
      )}
      <TodoItemContainer key={id} deleted={deleted}>
        <Link to={`/profile/mytodo/${id}`}>
          <TodoText isCompleted={isCompleted}> {title}</TodoText>
        </Link>
      </TodoItemContainer>
      {!deleted && (
        <DeleteButton onClick={() => handleDelete()} deleted={deleted}>
          Delete
        </DeleteButton>
      )}

      {/* {deleted && <DeleteButton deleted={deleted}>Recover Todo</DeleteButton>} */}
    </TodoContainer>
  );
};
