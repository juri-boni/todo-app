import { css, keyframes } from "styled-components";

// Definizione dell'animazione di loading
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const stateStyles = {
  default: css``,
  active: css`
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.ui.active};
  `,
  focus: css`
    outline: 2px solid ${(props) => props.theme.colors.ui.focus};
    outline-offset: 2px;
  `,
  disabled: css`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `,
  loading: css`
    cursor: progress;
    position: relative;
    &:before {
      content: "";
      border: 2px solid ${(props) => props.theme.colors.bg.secondary};
      border-top: 2px solid ${(props) => props.theme.colors.text.primary};
      border-radius: 50%;
      width: 16px;
      height: 16px;
      display: inline-block;
      animation: ${spin} 1s linear infinite;
      position: absolute;
      left: -24px;
    }
  `,
};
