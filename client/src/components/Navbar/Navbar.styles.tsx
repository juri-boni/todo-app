import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f4e1ff;
  border-bottom: 1px solid #ddd;
  height: 6em;
`;

export const LogoContainer = styled(Link)`
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: #333;
  }
`;

export const LogoutButton = styled.button`
  /* background: none; */
  border: none;
  color: #f00;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
