import { css } from "styled-components";

export const shadowStyles = {
  none: css``, // No shadow by default
  shadow: css`
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  `,
  elevated: css`
    box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.2);
  `,
};
