// Button.styles.tsx
import styled, { css } from "styled-components";
import { variantColors } from "./variants/colorVariants.js";
import { sizeStyles } from "./variants/sizeVariants.js";
import { shapeStyles } from "./variants/shapeVariants.js";
import { stateStyles } from "./variants/stateVariants.js";
import { shadowStyles } from "./variants/shadowVariants.js";
import { textStyleVariants } from "./variants/textVariants.js";
// import { animationStyles } from "./variants/animationVariants.js";
import { animationVariants } from "./variants/animationVariants.js";
import {
  submitAnimation,
  triggerSubmitAnimation,
} from "./variants/animationVariants.js";

interface ButtonContainerProps {
  variant: "primary" | "secondary" | "inverted" | "danger";
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  shape: "round" | "circle" | "square" | "softRounded";
  state: "default" | "active" | "disabled" | "loading";
  shadow: "none" | "shadow" | "elevated";
  textStyle: "uppercase" | "lowercase" | "capitalize";
  // animation: "bounce" | "pulse" | "shake";
  // hoverAnimation: "bounce" | "pulse" | "shake" | "glow" | "slide";
  // clickAnimation: "glow" | "pop" | "ripple" | "zoomIn" | "zoomOut" | "tilt";
  animation: "standard" | "standardGlow";
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
