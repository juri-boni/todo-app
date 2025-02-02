import styled from "styled-components";

import {
  getColor,
  getSize,
  getSpacing,
  getFont,
} from "../../utils/themeHelpers";

export const LoginFormContainer = styled.div`
  min-height: 50vh;
  min-width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${getSpacing("margin.huge")};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: ${getSize("height.huge")};
  padding: ${getSpacing("padding.large")};
  border-radius: ${getSize("borderRadius.medium")};
  background-color: ${getColor("bg.primary")};
  box-shadow: ${getColor("shadow.medium")};
  border: 0.5px solid ${getColor("border.tertiary")};
`;

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${getSpacing("margin.small")};
`;

export const FormLabel = styled.label`
  margin-bottom: ${getSpacing("margin.xsmall")};
  font-size: ${getFont("fontSizes.xsmall")};
  color: ${getColor("text.tertiary")};
`;

export const FormInput = styled.input`
  padding: ${getSpacing("padding.small")};
  border: 1px solid ${getColor("text.secondary")};
  border-radius: ${getSize("borderRadius.small")};
  font-size: ${getFont("fontSizes.small")};
  margin-bottom: ${getSpacing("margin.medium")};
  outline: none;

  input:active,
  input:focus {
    border: 1px solid ${getColor("border.focused")};
  }
`;

export const FormButton = styled.button`
  align-self: center; /* Centered button */
  width: auto; /* No full width */
  padding: ${getSpacing(["padding.mediumSmall", "padding.medium"])};
  font-size: ${getFont("fontSizes.small")};
  color: ${getColor("text.primary")};
  background-color: ${getColor("bg.alternative")};
  border: none;
  border-radius: ${getSize("borderRadius.small")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333; /* Dark gray on hover */
  }

  &:disabled {
    background-color: ${getColor("bg.alternative")};
    cursor: not-allowed;
  }
`;
