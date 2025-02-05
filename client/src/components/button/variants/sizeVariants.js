import { css } from "styled-components";
import { getSize, getFont, getSpacing } from "../../../utils/themeHelpers";

export const sizeStyles = {
  xsmall: css`
    padding: 6px 12px;
    font-size: ${getFont("fontSizes.xxsmall")};
  `,
  small: css`
    padding: 8px 16px;
    font-size: ${getFont("fontSizes.xsmall")};
  `,
  medium: css`
    padding: 10px 20px;
    font-size: ${getFont("fontSizes.small")};
  `,
  large: css`
    padding: 12px 24px;
    font-size: ${getFont("fontSizes.large")};
  `,
  xlarge: css`
    padding: 14px 28px;
    font-size: ${getFont("fontSizes.xlarge")};
  `,
};
