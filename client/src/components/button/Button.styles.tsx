import styled from "styled-components";
import defaultVariants from "./variants/indexVariants"; // Importing all variants in one

interface ButtonContainerProps {
  variant:
    | "primary"
    | "secondary"
    | "outlined"
    | "danger"
    | "ghost"
    | "success"
    | "neutral";

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
  shadow: "none" | "shadow" | "medium" | "elevated" | "deep";
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

export const ButtonContainer = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "textStyle",
      "variant",
      "size",
      "shape",
      "state",
      "shadow",
      "animation",
    ].includes(prop),
})<ButtonContainerProps>`
  transition:
    transform 0.3s ease-in-out,
    color 0.3s ease 0.1s;
  border: none;
  cursor: pointer;
  font-weight: 500;

  ${(props) => defaultVariants.variantColors[props.variant]}
  ${(props) => defaultVariants.sizeStyles[props.size]}
  ${(props) => defaultVariants.shapeStyles[props.shape]}
  ${(props) => defaultVariants.stateStyles[props.state]}
  ${(props) => defaultVariants.shadowStyles[props.shadow]}
  ${(props) => defaultVariants.textStyleVariants[props.textStyle]}
  ${(props) => defaultVariants.animationVariants[props.animation]}
`;
