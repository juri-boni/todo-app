import styled from "styled-components";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import {
  getFont,
  getColor,
  getSize,
  getSpacing,
} from "../../utils/themeHelpers";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${getColor("bg.primary")};
  gap: ${getSpacing("gap.small")};
`;

export const TodoItemContainer = styled.div<{ deleted: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${getSpacing("padding.small")};
  border-radius: ${getSize("borderRadius.medium")};
  text-decoration: ${({ deleted }) => (deleted ? "line-through" : "none")};
  width: 95%;
  max-width: 95%;
`;

export const TodoText = styled.span<{ isCompleted: boolean }>`
  font-size: ${getFont("fontSizes.small")};
  font-weight: ${getFont("fontWeights.normal")};
  color: ${({ isCompleted }) =>
    isCompleted ? getColor("text.tertiary") : getColor("text.primary")};
`;

export const CheckboxCompleted = styled(CheckBoxIcon)`
  cursor: pointer;
`;

export const CheckboxPending = styled(CheckBoxOutlineBlankIcon)`
  cursor: pointer;
`;
