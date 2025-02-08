import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./context/userContext.js";
import { TodosProvider } from "./context/todosContext.js";
import { GlobalStyle } from "./styles/global.js";
import { Login } from "./pages/Login/Login.component.js";
import { Register } from "./pages/Register/Register.component.js";
import { Navbar } from "./components/Navbar/Navbar.component.js";
import { Admin } from "./pages/Admin/Admin.component.js";
import { User } from "./pages/User/User.component.js";
import { TodoPage } from "./pages/Todos/TodoPage.component.js";
import { AppContainer, MainContent } from "./App.styles.js";
import { themes } from "./theme/index.js";

function App() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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
                  element={<Admin theme={theme} setTheme={setTheme} />}
                />
                <Route
                  path="/profile"
                  element={<User theme={theme} setTheme={setTheme} />}
                />
                <Route
                  path="/profile/mytodo/:id"
                  element={<TodoPage theme={theme} setTheme={setTheme} />}
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
