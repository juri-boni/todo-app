import React, { useState } from "react";
import { Form, Input } from "./AddTodo.styles";
import { useUser } from "../../hooks/useUser";
import { useTodos } from "../../hooks/useTodos";
import { createTodo, getAllTodosByUserId } from "../../services/todosService";

import { Button } from "../button/Button.component";

interface TodoData {
  title: string;
  description?: string;
  completed?: boolean;
  due_date?: Date;
  priority?: number;
  user_id?: number;
  created_by: number;
  tags?: string[];
  estimated_time?: number;
  notes?: string;
  color?: string;
  recurring_type?: string;
}

export const AddTodo: React.FC = () => {
  const { token, user } = useUser();
  const { setTodos } = useTodos();
  const [inputValue, setInputValue] = useState("");
  const todoData: TodoData = {
    title: inputValue,
    user_id: user?.id ?? 0,
    created_by: user?.id ?? 0,
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      console.error("Todo title cannot be empty");
      return;
    }

    try {
      const result = await createTodo(token ?? "", todoData);
      console.log(result);
      if (result) {
        setInputValue("");
        const fetchedTodos = await getAllTodosByUserId(
          token ?? "",
          user?.id ?? 0
        );
        setTodos(fetchedTodos);
      }
    } catch (error) {
      console.error("faild to create new todo item", error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add your new to-do, you crazy motherfucker"
      />

      <Button
        type="submit"
        variant="outlined"
        size="small"
        shape="softRounded"
        textStyle="capitalize"
      >
        Add
      </Button>
      <Button
        variant="outlined"
        size="small"
        shape="softRounded"
        textStyle="capitalize"
      >
        New
      </Button>
    </Form>
  );
};
