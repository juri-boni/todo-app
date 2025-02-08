import React, { useState } from "react";
import { deleteTodo } from "../../services/todosService";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { Button } from "../button/Button.component";

import {
  TodoContainer,
  TodoItemContainer,
  TodoText,
  CheckboxCompleted,
  CheckboxPending,
} from "./TodoItem.styles";

interface Todo {
  id: number;
  title: string;
  deleted?: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { token } = useUser();
  const [isCompleted, setIsCompleted] = useState(false);
  const { id, title, deleted } = todo;

  const handleDelete = async () => {
    try {
      await deleteTodo(token ?? "", id);
      toggleIsCompleted();
    } catch (error) {
      console.error("error trying to delete a todo ", error);
    }
  };

  const handleUpdate = () => {
    console.log("calling handleUpadate: to be implemented");
  };

  const toggleIsCompleted = () => setIsCompleted(!isCompleted);

  return (
    <TodoContainer>
      {isCompleted && (
        <CheckboxCompleted
          color={"primary"}
          onClick={toggleIsCompleted}
        ></CheckboxCompleted>
      )}
      {!isCompleted && (
        <CheckboxPending onClick={toggleIsCompleted}></CheckboxPending>
      )}
      <TodoItemContainer key={id} deleted={deleted ?? false}>
        <Link to={`/profile/mytodo/${id}`}>
          <TodoText isCompleted={isCompleted}> {title}</TodoText>
        </Link>
      </TodoItemContainer>

      <Button
        onClickFunction={handleDelete}
        variant="outlined"
        size="xsmall"
        shape="square"
        textStyle="capitalize"
      >
        Delete
      </Button>
      <Button
        onClickFunction={handleUpdate}
        variant="secondary"
        size="xsmall"
        shape="square"
        textStyle="capitalize"
      >
        Update
      </Button>
    </TodoContainer>
  );
};
