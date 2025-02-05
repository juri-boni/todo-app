import React, { useState } from "react";
import { Form, Input, Button } from "./AddTodo.styles";
import { useUser } from "../../hooks/useUser";
import { createTodo } from "../../services/todosService";

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
  const { token } = useUser();
  const { user } = useUser();
  const [inputValue, setInputValue] = useState("");
  const todoData: TodoData = {
    title: inputValue,
    user_id: user?.id,
    created_by: user?.id,
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      console.error("Todo title cannot be empty");
      return;
    }

    try {
      const result = await createTodo(token ?? "", todoData);
      // console.log(result);
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
      <Button type="submit">Add</Button>
    </Form>
  );
};
