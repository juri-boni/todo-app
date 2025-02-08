import { css } from "styled-components";

export const textStyleVariants = {
  default: css`
    text-transform: none;
  `,
  uppercase: css`
    text-transform: uppercase;
  `,
  lowercase: css`
    text-transform: lowercase;
  `,
  capitalize: css`
    text-transform: capitalize;
  `,
  bold: css`
    font-weight: bold;
  `,
  italic: css`
    font-style: italic;
  `,
  truncate: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};
