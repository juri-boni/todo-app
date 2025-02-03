import styled from "styled-components";
import { getColor, getSpacing, getFont } from "../../utils/themeHelpers";

export const SidebarContainer = styled.aside`
  width: 18%;
  background-color: ${getColor("bg.primary")};
  padding: ${getSpacing("padding.large")};
  border-right: 1px solid ${getColor("border.primary")};

  /* h3 {
    margin-bottom: ${getSpacing("margin.large")};
    font-size: ${getFont("fontSizes.large")};
  } */

  /* ul {
    list-style: none;
    padding: ${getSpacing("padding.none")};

    li {
      margin-bottom: ${getSpacing("margin.medium")};
      cursor: pointer;
      font-size: ${getFont("fontSizes.small")};
      color: ${getColor("text.secondary")};

      &:hover {
        color: ${getColor("text.primary")};
      }
    } */
  /* } */
`;

export const SidebarTitle = styled.h3`
  margin-bottom: ${getSpacing("margin.large")};
  font-size: ${getFont("fontSizes.large")};
`;

export const SidebarOptionList = styled.ul`
  list-style: none;
  padding: ${getSpacing("padding.none")};

  /* li {
    margin-bottom: ${getSpacing("margin.medium")};
    cursor: pointer;
    font-size: ${getFont("fontSizes.small")};
    color: ${getColor("text.secondary")};

    &:hover {
      color: ${getColor("text.primary")};
    } */
  /* } */
`;

export const SidebarOption = styled.li`
  margin-bottom: ${getSpacing("margin.medium")};
  cursor: pointer;
  font-size: ${getFont("fontSizes.small")};
  color: ${getColor("text.secondary")};

  &:hover {
    color: ${getColor("text.primary")};
  }
`;
