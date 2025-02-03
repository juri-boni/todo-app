import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { UserContainer, UserSidebar } from "./TodoPage.styles";
import { useTodos } from "../../hooks/useTodos";
import { PageContainer } from "../../components/PageContainer/PageContainer.component";

export const TodoPage = ({ theme, setTheme }) => {
  const { id } = useParams();
  // const { title, description } = useTodos();
  const navigate = useNavigate();

  return (
    <PageContainer theme={theme} setTheme={setTheme}>
      <h1>here goes the todo {id}</h1>
      <ul>{/* <li>{title}</li> */}</ul>
    </PageContainer>
  );
};
