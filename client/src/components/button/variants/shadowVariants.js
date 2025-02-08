import { css } from "styled-components";
import { getColor } from "../../../utils/themeHelpers";

export const shadowStyles = {
  none: css``,
  shadow: css`
    box-shadow: ${getColor("shadow.light")};
  `,
  medium: css`
    box-shadow: ${getColor("shadow.medium")};
  `,
  elevated: css`
    box-shadow: ${getColor("shadow.heavy")};
  `,
  deep: css`
    box-shadow: ${getColor("shadow.deep")};
  `,
  // soft: css`
  //   box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
  // `,
};
