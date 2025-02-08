// Button.styles.tsx
import styled, { css } from "styled-components";
import { variantColors } from "./variants/colorVariants.js";
import { sizeStyles } from "./variants/sizeVariants.js";
import { shapeStyles } from "./variants/shapeVariants.js";
import { stateStyles } from "./variants/stateVariants.js";
import { shadowStyles } from "./variants/shadowVariants.js";
import { textStyleVariants } from "./variants/textVariants.js";

import { animationVariants } from "./variants/animationVariants.js";

interface ButtonContainerProps {
  variant: "primary" | "secondary" | "inverted" | "danger";
  size:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "mediumLarge"
    | "large"
    | "xlarge";
  shape: "round" | "circle" | "square" | "softRounded" | "pill" | "subtle";
  state: "default" | "active" | "focus" | "disabled" | "loading";
  shadow: "none" | "shadow" | "elevated" | "deep" | "soft";
  textStyle:
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "bold"
    | "italic"
    | "truncate";
  animation: "standard" | "standardGlow" | "shake" | "bounce" | "fadeIn";
  disabled: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  transition:
    transform 0.3s ease-in-out,
    color 0.3s ease 0.1s;
  border: none;
  cursor: pointer;
  font-weight: 500;
  ${(props) => variantColors[props.variant]}
  ${(props) => sizeStyles[props.size]}
  ${(props) => shapeStyles[props.shape]}
  ${(props) => stateStyles[props.state]}
  ${(props) => shadowStyles[props.shadow]}
  ${(props) => textStyleVariants[props.textStyle]}
  ${(props) => animationVariants[props.animation]}
`;
