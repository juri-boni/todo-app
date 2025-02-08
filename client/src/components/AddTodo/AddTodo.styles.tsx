import styled from "styled-components";
import {
  getColor,
  getSpacing,
  getSize,
  getFont,
} from "../../utils/themeHelpers";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${getSpacing("gap.small")};
  margin-bottom: ${getSpacing("margin.small")};
  /* padding: ${getSpacing("padding.small")}; */
  width: 100%;
  height: ${getSize("height.xxxlarge")};
  /* background-color: ${getColor("bg.primary")}; */

  /* @media (max-width: 600px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
} */
`;

export const Input = styled.input`
  flex: 1;
  width: 90%;
  padding: ${getSpacing("padding.small")};
  font-size: ${getFont("fontSizes.small")};
  border: 2px solid ${getColor("border.primary")};
  border-radius: 4px 0 0 4px;
  outline: none;
  background-color: ${getColor("bg.primary")};
  color: ${getColor("text.primary")};
  /* @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  } */
  /* input:focus,
  textarea:focus {
    border-color: 2px solid ${getColor("brand.primary")};
  } */

  &:active {
    border: 2px solid ${getColor("brand.primary")};
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: ${getFont("fontSizes.small")};
  width: ${getSize("width.xxxlarge")};
  background-color: ${getColor("bg.secondary")};
  color: ${getColor("text.primary")};
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${getColor("bg.alternative")};
    color: ${getColor("text.secondary")};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
