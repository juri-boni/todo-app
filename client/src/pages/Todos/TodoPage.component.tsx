import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { UserContainer, UserSidebar } from "./TodoPage.styles";
import { useTodos } from "../../hooks/useTodos";

export const TodoPage = ({ todos }) => {
  const { id } = useParams();
  // const { title, description } = useTodos();
  const navigate = useNavigate();

  return (
    <UserContainer>
      <UserSidebar>
        <ul>
          {/* <ThemeToggleButton onClick={toggleTheme}>
                    {theme === "dark" ? "Light" : "Dark"}
                  </ThemeToggleButton> */}
          <li>Info</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </UserSidebar>
      <h1>here goes the todo {id}</h1>
      <ul>{/* <li>{title}</li> */}</ul>
    </UserContainer>
  );
};
