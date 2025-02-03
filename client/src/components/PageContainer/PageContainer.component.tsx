import React from "react";
import { Container } from "./PageContainer.styles";
import { Sidebar } from "../Sidebar/Sidebar.component";

export const PageContainer = ({ children, sidebarTitle }) => {
  return (
    <Container>
      <Sidebar sidebarTitle={sidebarTitle}> </Sidebar>
      {children}
    </Container>
  );
};
