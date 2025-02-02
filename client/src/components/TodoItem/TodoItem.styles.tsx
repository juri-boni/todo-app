import styled from "styled-components";
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
`;

export const TodoItemContainer = styled.div<{ deleted: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing("gap.xsmall")};
  padding: ${getSpacing("padding.small")};
  border: 1px solid ${getColor("border.primary")};
  border-radius: ${getSize("borderRadius.medium")};
  background-color: ${getColor("bg.secondary")};
  margin-bottom: ${getSpacing("margin.small")};
  text-decoration: ${({ deleted }) => (deleted ? "line-through" : "none")};
`;

export const TodoText = styled.span`
  font-size: ${getFont("fontSizes.medium")};
  font-weight: ${getFont("fontWeights.medium")};
  color: ${getColor("text.primary")};
`;

export const TodoElement = styled.span`
  font-size: ${getFont("fontSizes.xxsmall")};
  color: ${getColor("text.secondary")};
`;

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
