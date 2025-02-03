import React from "react";
import { Container } from "./PageContainer.styles";
import { Sidebar } from "../Sidebar/Sidebar.component";

export const PageContainer = ({ children, sidebarTitle, theme, setTheme }) => {
  return (
    <Container>
      <Sidebar sidebarTitle={sidebarTitle} theme={theme} setTheme={setTheme}>
        {" "}
      </Sidebar>
      {children}
    </Container>
  );
};
