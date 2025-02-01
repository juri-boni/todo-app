import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.padding.small}
    ${({ theme }) => theme.spacing.padding.large};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  height: 4rem;
`;

export const LogoContainer = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fonts.fontSizes.medium};
    font-weight: bold;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.gap.medium};
  margin: 0;
  padding: 0;
  align-items: center; // Ensures vertical alignment of the items

  li {
    display: flex;
    align-items: center; // Ensures individual list items are centered vertically
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fonts.fontSizes.small};
  }
`;

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.fonts.fontSizes.small};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const LogoutButton = styled.button`
  padding: 0.6em 1.5em;
  font-size: ${({ theme }) => theme.fonts.fontSizes.small};
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg.alternative};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.hover};
  }
`;
