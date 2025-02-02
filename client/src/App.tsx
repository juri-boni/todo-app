import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { UserProvider } from "./context/userContext.js";
import { TodosProvider } from "./context/todosContext.js";
import { GlobalStyle } from "./styles/global.js";
import { Login } from "./pages/Login/Login.component.js";
import { Register } from "./pages/Register/Register.component.js";
import { Navbar } from "./components/Navbar/Navbar.component.js";
import { Admin } from "./pages/Admin/Admin.component.js";
import { User } from "./pages/User/User.component.js";
import { themes } from "./theme/index.js";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme?.colors?.bg.primary || "#fff"};
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

// const ThemeToggleButton = styled.button`
//   background-color: ${({ theme }) => theme?.colors?.ui.primary || "#333"};
//   color: ${({ theme }) => theme?.colors?.text.primary || "#fff"};
//   padding: 0.8rem 1.6rem;
//   border: none;
//   cursor: pointer;
//   margin: 1rem 0;
//   border-radius: 0.4rem;
//   font-size: ${({ theme }) => theme?.fonts.fontSizes.medium || "16px"};

//   &:hover {
//     background-color: ${({ theme }) => theme?.colors?.ui.secondary || "#555"};
//   }
// `;

function App() {
  // Check localStorage for the theme on initial load
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <UserProvider>
        <TodosProvider>
          <GlobalStyle />
          <AppContainer>
            <header>
              <Navbar theme={theme} setTheme={setTheme} />
            </header>
            <MainContent>
              {/* <ThemeToggleButton onClick={toggleTheme}>
                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
              </ThemeToggleButton> */}
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/admin"
                  element={
                    <Admin
                      theme={theme}
                      setTheme={setTheme}
                      toggleTheme={toggleTheme}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <User
                      theme={theme}
                      setTheme={setTheme}
                      toggleTheme={toggleTheme}
                    />
                  }
                />
              </Routes>
            </MainContent>
          </AppContainer>
        </TodosProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
