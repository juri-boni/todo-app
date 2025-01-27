import React, { useState, useEffect } from "react";

// import { useUser } from "../../context/userContext";
import { useUser } from "../../hooks/useUser";
import { useTodos } from "../../hooks/useTodos";
import { getAllTodos } from "../../services/todosService";
import { UserContainer, UserSidebar } from "./User.styles";

export const User = () => {
  // const [todos, setTodos] = useState([]);
  const { token } = useUser();
  const { user } = useUser();
  const { todos, setTodos } = useTodos();

  useEffect(() => {
    // console.log(user.id);
    // const userId = user.id;

    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getAllTodos(token ?? "", user.id);
        console.log(fetchedTodos);
        setTodos(fetchedTodos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <UserContainer>
      {/* <h3>USER PAGE</h3> */}
      <UserSidebar>
        <ul>
          <li>Info</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </UserSidebar>
      {/* {isLoading && <p>Loading users...</p>}
       {error && <p className="error">{error}</p>} */}
      <div>
        <h2>All Users</h2>

        <div>
          {todos.map((todo) => {
            const todoId = todo.id; // Declare the id variable
            return <p key={todoId}>{todo.title}</p>; // Use the variable as the key
          })}
        </div>
      </div>
    </UserContainer>
  );
};
