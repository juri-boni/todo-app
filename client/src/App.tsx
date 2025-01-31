// import "./App.css";

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
  align-items: stretch; /* Prevent navbar from being centered */
  min-height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme?.colors?.bg.primary || "#fff"};
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content, not navbar */
  flex-grow: 1; /* Allow content to take up the remaining space */
`;

function App() {
  return (
    <>
      <ThemeProvider theme={themes["dark"]}>
        <UserProvider>
          <TodosProvider>
            <GlobalStyle />
            <AppContainer>
              <header>
                <Navbar></Navbar>
              </header>
              <MainContent>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/profile" element={<User />} />
                </Routes>
              </MainContent>
            </AppContainer>
          </TodosProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
