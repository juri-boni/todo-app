import { css } from "styled-components";

export const stateStyles = {
  default: css``,
  active: css`
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.ui.active};
  `,
  disabled: css`
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  `,
  loading: css`
    cursor: progress;
    &:before {
      content: "";
      border: 2px solid ${(props) => props.theme.colors.bg.secondary};
      border-top: 2px solid ${(props) => props.theme.colors.text.primary};
      border-radius: 50%;
      width: 16px;
      height: 16px;
      animation: spin 1s linear infinite;
      display: inline-block;
      margin-right: 8px;
    }
  `,
};
