import { css } from "styled-components";
import { getFont, getSpacing } from "../../../utils/themeHelpers";

export const sizeStyles = {
  xxsmall: css`
    padding: ${getSpacing(["padding.xxsmall", "padding.xsmall"])};
    font-size: ${getFont("fontSizes.xxxmall")};
  `,
  xsmall: css`
    padding: ${getSpacing(["padding.xsmall", "padding.small"])};
    font-size: ${getFont("fontSizes.xxsmall")};
  `,
  small: css`
    padding: ${getSpacing(["padding.small", "padding.medium"])};
    font-size: ${getFont("fontSizes.xsmall")};
  `,
  medium: css`
    padding: ${getSpacing(["padding.small", "padding.mediumSmall"])};
    font-size: ${getFont("fontSizes.small")};
  `,
  mediumLarge: css`
    padding: ${getSpacing(["padding.mediumSmall", "padding.medium"])};
    font-size: ${getFont("fontSizes.medium")};
  `,
  large: css`
    padding: ${getSpacing(["padding.medium", "padding.large"])};
    font-size: ${getFont("fontSizes.large")};
  `,
  // xlarge: css`
  //   padding: 14px 28px;
  //   font-size: ${getFont("fontSizes.xlarge")};
  // `,
  // xxlarge: css`
  //   padding: 16px 32px;
  //   font-size: ${getFont("fontSizes.xxlarge")};
  // `,
  // fullWidth: css`
  //   width: 100%;
  //   padding: 12px 24px;
  //   font-size: ${getFont("fontSizes.large")};
  // `,
};
