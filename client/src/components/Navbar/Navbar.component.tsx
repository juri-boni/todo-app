import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import {
  NavigationContainer,
  LogoContainer,
  LinksContainer,
  UserName,
} from "./Navbar.styles";

import { Button } from "../button/Button.component";

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
              <Button
                onClickFunction={handleLogout}
                type="button"
                variant="neutral"
                size="small"
                shape="square"
                textStyle="capitalize"
              >
                Logout
              </Button>
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
