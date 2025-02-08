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
  width: 100%;
  height: ${getSize("height.xxxlarge")};

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
  &:active {
    border: 2px solid ${getColor("brand.primary")};
  }
`;
