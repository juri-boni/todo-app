import styled from "styled-components";

import {
  getColor,
  getSize,
  getSpacing,
  getFont,
} from "../../utils/themeHelpers";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${getSpacing(["padding.xlarge", "padding.medium"])};
  background-color: ${getColor("bg.primary")};
  border-bottom: 1px solid ${getColor("border.primary")};
  height: ${getSize("height.xxlarge")};
`;

export const LogoContainer = styled.div`
  a {
    text-decoration: none;
    color: ${getColor("text.primary")};
    font-size: ${getFont("fontSizes.medium")};
    font-weight: ${getFont("fontWeights.medium")};
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: ${getSpacing("gap.medium")};
  margin: ${getSpacing("margin.none")};
  padding: ${getSpacing("padding.none")};
  align-items: center;

  li {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${getColor("text.primary")};
    font-size: ${getFont("fontSizes.small")};
  }
`;

export const UserName = styled.span`
  font-size: ${getFont("fontSizes.small")};
  font-weight: ${getFont("fontWeights.medium")};
  color: ${getColor("brand.secondary")};
`;
