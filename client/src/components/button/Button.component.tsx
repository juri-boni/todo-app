import React from "react";
import { themes } from "../../theme";

import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  // currentTheme: keyof typeof themes;
  handleFunction: (theme: keyof typeof themes) => void;
  variant?: "primary" | "secondary" | "inverted" | "danger";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  shape?: "round" | "circle" | "square" | "softRounded";
  state?: "default" | "active" | "disabled" | "loading";
  shadow?: "none" | "shadow" | "elevated";
  textStyle?: "uppercase" | "lowercase" | "capitalize";
  animation?: "standard" | "standardGlow";
  // hoverAnimation?: "bounce" | "pulse" | "shake" | "glow" | "slide";
  // clickAnimation?: "glow" | "pop" | "ripple" | "zoomIn" | "zoomOut" | "tilt";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  // currentTheme,
  handleFunction = () => null,
  variant = "primary",
  size = "medium",
  shape = "round",
  state = "default",
  shadow = "none",
  textStyle = "uppercase",
  // hoverAnimation = "bounce",
  // clickAnimation = "glow",
  animation = "standard",
  disabled = false,
}) => {
  // const toggleTheme = () => {
  //   const themeKeys = Object.keys(themes) as Array<keyof typeof themes>;
  //   const currentThemeIndex = themeKeys.indexOf(currentTheme);
  //   const nextThemeIndex = (currentThemeIndex + 1) % themeKeys.length;
  //   setCurrentTheme(themeKeys[nextThemeIndex]);
  // };
  // console.log("currentTheme", currentTheme);

  return (
    <ButtonContainer
      onClick={handleFunction}
      variant={variant}
      size={size}
      shape={shape}
      state={state}
      shadow={shadow}
      textStyle={textStyle}
      animation={animation}
      // hoverAnimation={hoverAnimation}
      // clickAnimation={clickAnimation}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};
