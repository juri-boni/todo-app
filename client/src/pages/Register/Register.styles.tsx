import styled from "styled-components";

import {
  getColor,
  getSize,
  getSpacing,
  getFont,
} from "../../utils/themeHelpers";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${getSize("width.immense")};
  min-width: ${getSize("width.ultra")};
  margin: 0 auto;
  padding: ${getSpacing("padding.xlarge")};
  background-color: ${getColor("bg.primary")};
  border: 1px solid ${getColor("border.primary")};
  border-radius: ${getSize("borderRadius.medium")};
  box-shadow: ${getColor("shadow.darkGlow")};
  margin-top: ${getSpacing("margin.mega")};
`;

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: ${getSpacing("gap.medium")};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing("gap.small")};

  /* label {
    font-size: ${getFont("fontSizes.xsmall")};
    color: ${getColor("text.secondary")};
  } */

  /* input,
  select {
    padding: ${getSpacing("padding.small")};
    font-size: ${getFont("fontSizes.small")};
    border: 1px solid ${getColor("border.tertiary")};
    background-color: ${getColor("bg.alternative")};
    border-radius: ${getSize("borderRadius.medium")};
  }

  input:active,
  input:focus {
    border: 1px solid ${getColor("border.focused")};
  }

  input:disabled,
  select:disabled {
    background-color: ${getColor("bg.muted")};
  } */
`;

export const Input = styled.input`
  padding: ${getSpacing("padding.small")};
  font-size: ${getFont("fontSizes.small")};
  border: 1px solid ${getColor("border.tertiary")};
  background-color: ${getColor("bg.alternative")};
  border-radius: ${getSize("borderRadius.medium")};

  &:active,
  &:focus {
    border: 1px solid ${getColor("border.focused")};
  }

  &:disabled {
    background-color: ${getColor("bg.muted")};
  }
`;

export const Label = styled.label`
  font-size: ${getFont("fontSizes.xsmall")};
  color: ${getColor("text.secondary")};
`;

export const Select = styled.select`
  max-width: max-content;
  padding: ${getSpacing("padding.small")};
  font-size: ${getFont("fontSizes.small")};
  border: 1px solid ${getColor("border.tertiary")};
  background-color: ${getColor("bg.alternative")};
  border-radius: ${getSize("borderRadius.medium")};

  &:disabled {
    background-color: ${getColor("bg.muted")};
  }
`;

export const ErrorMessage = styled.p`
  color: ${getColor("text.error")};
  font-size: ${getFont("fontSizes.small")};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding: ${getSpacing(["padding.mediumSmall", "padding.medium"])};
  font-size: ${getFont("fontSizes.small")};
  color: ${getColor("text.primary")};
  background-color: ${getColor("bg.alternative")};
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    background-color: ${getColor("bg.muted")};
    cursor: not-allowed;
  } */
`;

// export const SubmitButton = styled.button`
//   align-self: center;
//   width: auto;
//   padding: ${getSpacing(["padding.mediumSmall", "padding.medium"])};
//   font-size: ${getFont("fontSizes.small")};
//   color: ${getColor("text.primary")};
//   background-color: ${getColor("bg.alternative")};
//   border: none;
//   border-radius: 0.3em;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:disabled {
//     background-color: ${getColor("bg.muted")};
//     cursor: not-allowed;
//   }
// `;
