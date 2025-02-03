import styled from "styled-components";
import {
  getColor,
  getSize,
  getSpacing,
  getFont,
} from "../../utils/themeHelpers";

export const ThemeToggleButton = styled.button`
  background-color: ${getColor("ui.primary")};
  color: ${getColor("text.primary")};
  padding: ${getSpacing(["padding.xsmall", "padding.medium"])};
  margin-bottom: ${getSpacing("margin.large")};
  border: none;
  cursor: pointer;
  border-radius: ${getSize("borderRadius.medium")};
  font-size: ${getFont("fontSizes.xsmall")};

  &:hover {
    background-color: ${getColor("ui.secondary")};
  }
`;
