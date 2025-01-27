import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import {
  NavigationContainer,
  LogoContainer,
  LinksContainer,
  LogoutButton,
} from "./Navbar.styles";

export const Navbar = () => {
  const { user, setUser } = useUser();
  // const { token, setToken } = useUser();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(user);
  //   console.log(token);
  //   // console.log("USER ==== " + user?.user.username);
  // }, []);

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
