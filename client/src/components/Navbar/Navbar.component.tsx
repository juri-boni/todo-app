// import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/useUser";
import {
  NavigationContainer,
  LogoContainer,
  LinksContainer,
  LogoutButton,
  UserName,
} from "./Navbar.styles";

export const Navbar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <NavigationContainer>
      <LogoContainer>
        <Link to="/">Todo App</Link>
      </LogoContainer>
      <LinksContainer>
        {user && <UserName>{user.username}</UserName>}
        {user ? (
          <>
            {user?.role === "admin" && (
              <li>
                <Link to="/admin">Admin Panel</Link>
              </li>
            )}
            {user?.role === "user" && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            <li>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </LinksContainer>
    </NavigationContainer>
  );
};
