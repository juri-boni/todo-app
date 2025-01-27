import React, { createContext, useState, useContext, ReactNode } from "react";

interface Todo {
  id: number;
  title: string;
}

interface TodoContextType {
  todos: Todo[]; // No need for null if you always expect an array
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodosContext = createContext<TodoContextType | undefined>(
  undefined
);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]); // Empty array as default

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

// export const useTodos = (): TodoContextType => {
//   const context = useContext(TodosContext);
//   if (!context) {
//     throw new Error("useTodos must be used within a TodosProvider");
//   }
//   return context;
// };
