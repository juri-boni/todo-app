import { css } from "styled-components";

export const shapeStyles = {
  round: css`
    border-radius: 50px;
  `,
  circle: css`
    border-radius: 50%;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  square: css`
    border-radius: 0;
  `,
  softRounded: css`
    border-radius: 4px;
  `,
};
