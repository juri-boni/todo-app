import { css, keyframes } from "styled-components";

// Animazione di glow con keyframes
const glowEffect = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 10px 5px rgba(0, 0, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

// Animazione di shake
const shakeEffect = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;

// Animazione di bounce
const bounceEffect = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Animazione di fade in
const fadeInEffect = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
      animation: ${glowEffect} 1.5s infinite alternate;
    }

    &:active {
      transform: scale(0.9);
      transform: translateY(3px);
      box-shadow: ${(props) => props.theme.colors.shadow.glow};
    }
  `,

  shake: css`
    transition: all 0.3s ease-in-out;
    &:hover {
      animation: ${shakeEffect} 0.5s ease-in-out;
    }
  `,

  bounce: css`
    transition: all 0.3s ease-in-out;
    &:hover {
      animation: ${bounceEffect} 0.5s ease-in-out;
    }
  `,

  fadeIn: css`
    animation: ${fadeInEffect} 1s ease-in-out forwards;
  `,
};
