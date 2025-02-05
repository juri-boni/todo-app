import styled from "styled-components";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

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
  /* border-right: 0.5px solid #fff; */
`;

export const TodoItemContainer = styled.div<{ deleted: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: ${getSpacing("gap.xsmall")}; */
  padding: ${getSpacing("padding.small")};
  /* border-bottom: 0.5px solid #bbb; */
  border-radius: ${getSize("borderRadius.medium")};
  /* margin-bottom: ${getSpacing("margin.small")}; */
  text-decoration: ${({ deleted }) => (deleted ? "line-through" : "none")};
  width: 95%;
  max-width: 95%;
`;

export const TodoText = styled.span<{ isCompleted: boolean }>`
  font-size: ${getFont("fontSizes.small")};
  font-weight: ${getFont("fontWeights.normal")};
  /* color: ${getColor("text.primary")}; */
  color: ${({ isCompleted }) =>
    isCompleted ? getColor("text.tertiary") : getColor("text.primary")};
`;

// export const TodoElement = styled.span`
//   font-size: ${getFont("fontSizes.xxsmall")};
//   color: ${getColor("text.secondary")};
// `;

export const DeleteButton = styled.button<{ deleted: boolean }>`
  background: ${({ deleted }) => (deleted ? "#0045A3" : "#FF3B30")};
  color: ${getColor("text.primary")};
  border: none;
  padding: ${getSpacing("padding.xsmall")};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${getColor("bg.hover")};
  }
`;

export const CheckboxCompleted = styled(CheckBoxIcon)`
  cursor: pointer;
`;

export const CheckboxPending = styled(CheckBoxOutlineBlankIcon)`
  cursor: pointer;
`;
