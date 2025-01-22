import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f2f2f2; /* Light grey */
  border-bottom: 1px solid #ddd; /* Subtle border */
  height: 4rem; /* Reduced height for minimalistic look */
`;

export const LogoContainer = styled.div`
  a {
    text-decoration: none;
    color: #333; /* Dark grey */
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
    color: #333; /* Dark grey */
    font-size: 1rem;
  }
`;

export const LogoutButton = styled.button`
  align-self: center; /* Centered button */
  width: auto; /* No full width */
  padding: 0.6em 1.5em;
  font-size: 0.9em;
  color: #fff;
  background-color: #555; /* Medium gray */
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;
