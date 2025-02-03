import React from "react";

import {
  SidebarContainer,
  SidebarTitle,
  SidebarOptionList,
  SidebarOption,
} from "./Sidebar.styles";

export const Sidebar = ({ sidebarTitle }) => {
  return (
    <SidebarContainer>
      <SidebarTitle>{sidebarTitle}</SidebarTitle>
      <SidebarOptionList>
        <SidebarOption>Info </SidebarOption>
        <SidebarOption>Settings </SidebarOption>
        <SidebarOption>Logout </SidebarOption>
        <SidebarOption>Option4 </SidebarOption>
        <SidebarOption>Option5 </SidebarOption>
        <SidebarOption>Option6 </SidebarOption>
        <SidebarOption>Option7 </SidebarOption>
        <SidebarOption>Option8 </SidebarOption>
      </SidebarOptionList>
    </SidebarContainer>
  );
};
