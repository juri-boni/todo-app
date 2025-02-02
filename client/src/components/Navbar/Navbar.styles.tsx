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
  align-items: center; // Ensures vertical alignment of the items

  li {
    display: flex;
    align-items: center; // Ensures individual list items are centered vertically
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

export const LogoutButton = styled.button`
  padding: ${getSpacing(["padding.small", "padding.small"])};
  font-size: ${getFont("fontSizes.small")};
  color: #fff;
  background-color: ${getColor("bg.secondary")};
  border: none;
  border-radius: ${getSize("borderRadius.medium")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${getColor("bg.hover")};
  }
`;

// export const ThemeToggleButton = styled.button`
//   background-color: ${getColor("ui.primary")};
//   color: ${getColor("text.primary")};
//   padding: ${getSpacing(["padding.small", "padding.small"])};
//   border: none;
//   cursor: pointer;
//   border-radius: ${getSize("borderRadius.medium")};
//   font-size: ${getFont("fontSizes.small")};

//   &:hover {
//     background-color: ${getColor("ui.secondary")};
//   }
// `;
