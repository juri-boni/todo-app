import React from "react";

// import { ThemeButton } from "../ThemeButton/ThemeButton.component";
import { Button } from "../button/Button.component";

import {
  SidebarContainer,
  SidebarTitle,
  SidebarOptionList,
  SidebarOption,
} from "./Sidebar.styles";

export const Sidebar = ({ sidebarTitle, theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <SidebarContainer>
      <SidebarTitle>{sidebarTitle}</SidebarTitle>
      <Button
        onClickFunction={toggleTheme}
        variant="ghost"
        size="xsmall"
        shape="square"
        state="default"
        shadow="shadow"
        animation="bounce"
        textStyle="capitalize"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </Button>
      <SidebarOptionList>
        <SidebarOption>Info </SidebarOption>
        <SidebarOption>Settings </SidebarOption>
        <SidebarOption>Logout </SidebarOption>
        <SidebarOption>Option4 </SidebarOption>
        <SidebarOption>Option5 </SidebarOption>
        {/* <SidebarOption>Option6 </SidebarOption>
        <SidebarOption>Option7 </SidebarOption>
        <SidebarOption>Option8 </SidebarOption> */}
      </SidebarOptionList>
    </SidebarContainer>
  );
};
