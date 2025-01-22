import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import {
  NavigationContainer,
  LogoContainer,
  LinksContainer,
  LogoutButton,
} from "./Navbar.styles";
import "./Navbar.css";

export const Navbar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("USER: ", user?.user.username);
  });

  const handleLogout = () => {
    setUser(null); // Clear user context
    localStorage.removeItem("user"); // Remove user from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <NavigationContainer>
      <LogoContainer>
        <Link to="/">Todo App</Link>
      </LogoContainer>
      <LinksContainer>
        {user ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <LogoutButton onClick={handleLogout} className="logout-button">
                Logout
              </LogoutButton>
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
