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
import { TodoPage } from "./pages/Todos/TodoPage.component.js";
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

function App() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

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
                <Route path="/profile/mytodo/:id" element={<TodoPage />} />
              </Routes>
            </MainContent>
          </AppContainer>
        </TodosProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
