import React from "react";
import { TodoItemContainer, TodoText, TodoElement } from "./TodoItem.styles";

export const TodoItem = ({ todo }) => {
  const todoId = todo.id;
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

  console.log(tags);
  return (
    <TodoItemContainer key={todoId}>
      <TodoText>{title} - </TodoText>
      <TodoElement>{description}- </TodoElement>
      <TodoElement>{completed ? "completed" : "to be completed"}- </TodoElement>
      <TodoElement>{notes} - </TodoElement>
      <TodoElement>PRIORITY {priority} - </TodoElement>
      <TodoElement>{deleted ? "deleted" : "active"}- </TodoElement>
    </TodoItemContainer>
  );
};
