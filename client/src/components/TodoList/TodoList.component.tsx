import React from "react";
import { TodoItem } from "../TodoItem/TodoItem.component";
import { useTodos } from "../../hooks/useTodos";
import { ListContainer } from "./TodoList.styles";

export const TodoList = () => {
  const { todos } = useTodos();
  console.log(todos);
  return (
    <ListContainer>
      {todos.map((todo) => {
        const todoId = todo.id; // Declare the id variable
        return (
          <TodoItem key={todoId} todo={todo}>
            {todo.title}
          </TodoItem>
        ); // Use the variable as the key
      })}
    </ListContainer>
  );
};
