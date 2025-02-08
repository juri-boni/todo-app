import styled from "styled-components";

import { getColor, getFont, getSpacing } from "../../utils/themeHelpers";

export const UsersTable = styled.div`
  flex: 1;
  padding: ${getSpacing("padding.large")};
  background-color: ${getColor("bg.primary")};

  h2 {
    margin-bottom: ${getSpacing("margin.small")};
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid ${getColor("border.primary")};
      padding: ${getSpacing("padding.xsmall")};
      text-align: left;
    }

    th {
      background-color: ${getColor("bg.alternative")};
      font-size: ${getFont("fontSizes.small")};
    }

    td {
      font-size: ${getFont("fontSizes.xsmall")};
    }
  }
`;
