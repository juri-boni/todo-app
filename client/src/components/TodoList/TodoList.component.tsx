import { TodoItem } from "../TodoItem/TodoItem.component";
import { AddTodo } from "../AddTodo/AddTodo.component";
import { useTodos } from "../../hooks/useTodos";
import { ListItemContainer } from "./TodoList.styles";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ListItemContainer>
      <AddTodo></AddTodo>
      {todos.map((todo) => {
        const todoId = todo.id;
        return <TodoItem key={todoId} todo={todo} />;
      })}
    </ListItemContainer>
  );
};
