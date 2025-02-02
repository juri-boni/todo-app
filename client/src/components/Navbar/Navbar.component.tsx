import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import {
  NavigationContainer,
  LogoContainer,
  LinksContainer,
  LogoutButton,
  UserName,
  ThemeToggleButton,
} from "./Navbar.styles";
import { useEffect } from "react";

export const Navbar = ({ theme, setTheme }) => {
  const { user, setUser } = useUser();

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Navbar - theme = ", theme);
  // }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

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
      {/* <ThemeToggleButton onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"} Mode
      </ThemeToggleButton> */}
      <LinksContainer>
        {user ? (
          <>
            <UserName>{user.username}</UserName>
            {user.role === "admin" && (
              <li>
                <Link to="/admin">Admin Panel</Link>
              </li>
            )}
            <li>
              <Link to="/profile">Profile</Link>
            </li>
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
