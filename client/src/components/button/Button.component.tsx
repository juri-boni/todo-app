import React from "react";

import { ButtonContainer } from "./Button.styles";
interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClickFunction?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "danger"
    | "ghost"
    | "success"
    | "neutral";

  size?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "mediumLarge"
    | "large"
    | "xlarge";
  shape?: "round" | "circle" | "square" | "softRounded" | "pill" | "subtle";
  state?: "default" | "active" | "focus" | "disabled" | "loading";
  shadow?: "none" | "shadow" | "medium" | "elevated" | "deep";
  textStyle?:
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "bold"
    | "italic"
    | "truncate";
  animation?: "standard" | "standardGlow" | "shake" | "bounce" | "fadeIn";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClickFunction = () => null,
  variant = "primary",
  size = "medium",
  shape = "round",
  state = "default",
  shadow = "none",
  textStyle = "uppercase",
  animation = "standard",
  disabled = false,
}) => {
  return (
    <ButtonContainer
      onClick={onClickFunction}
      type={type}
      variant={variant}
      size={size}
      shape={shape}
      state={state}
      shadow={shadow}
      textStyle={textStyle}
      animation={animation}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};
