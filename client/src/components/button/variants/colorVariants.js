import { css } from "styled-components";
import { getColor } from "../../../utils/themeHelpers";

export const variantColors = {
  primary: css`
    background-color: ${getColor("brand.primary")};
    color: ${getColor("text.inverse")};
    border: 1px solid ${getColor("brand.primary")};
    &:hover {
      background-color: ${getColor("brand.primaryHover")};
    }
    &:active {
      background-color: ${getColor("brand.primaryActive")};
    }
  `,

  secondary: css`
    background-color: ${getColor("brand.secondary")};
    color: ${getColor("text.inverse")};
    border: 1px solid ${getColor("brand.secondary")};
    &:hover {
      background-color: ${getColor("brand.secondaryHover")};
    }
    &:active {
      background-color: ${getColor("brand.secondaryActive")};
    }
  `,

  outlined: css`
    background-color: transparent;
    color: ${getColor("brand.primary")};
    border: 1px solid ${getColor("brand.primary")};
    &:hover {
      background-color: ${getColor("bg.hover")};
    }
    &:active {
      background-color: ${getColor("brand.primaryHover")};
      color: ${getColor("text.inverse")};
    }
  `,

  danger: css`
    background-color: ${getColor("ui.error")};
    color: ${getColor("text.inverse")};
    border: 1px solid ${getColor("ui.error")};
    &:hover {
      background-color: ${getColor("text.error")};
    }
    &:active {
      background-color: ${getColor("border.error")};
    }
  `,

  ghost: css`
    background-color: transparent;
    color: ${getColor("text.primary")};
    border: none;
    &:hover {
      background-color: ${getColor("bg.hover")};
    }
    &:active {
      background-color: ${getColor("bg.alternative")};
    }
  `,

  success: css`
    background-color: ${getColor("ui.success")};
    color: ${getColor("text.inverse")};
    border: 1px solid ${getColor("ui.success")};
    &:hover {
      background-color: ${getColor("text.success")};
    }
    &:active {
      background-color: ${getColor("border.success")};
    }
  `,

  neutral: css`
    background-color: ${getColor("bg.secondary")};
    color: ${getColor("text.primary")};
    border: 1px solid ${getColor("border.primary")};
    &:hover {
      background-color: ${getColor("bg.tertiary")};
    }
    &:active {
      background-color: ${getColor("border.secondary")};
    }
  `,
};
