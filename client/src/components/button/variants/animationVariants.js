import { css, keyframes } from "styled-components";

export const animationVariants = {
  standard: css`
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.9);
      transform: translateY(3px);
      box-shadow: 0 0 3px rgba(0, 0, 0, 0);
    }
  `,
  standardGlow: css`
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.9);
      transform: translateY(3px);
      box-shadow: ${(props) => props.theme.colors.shadow.glow};
    }
  `,
};
