// import "./App.css";

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { UserProvider } from "./context/userContext.js";
import { GlobalStyle } from "./styles/global.js";
import { Login } from "./pages/Login/Login.component.js";
import { Register } from "./pages/Register/Register.component.js";
import { Navbar } from "./components/Navbar/Navbar.component.js";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch; /* Prevent navbar from being centered */
  min-height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => theme?.colors?.bg.primary || "#f4f4f9"};
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
      <UserProvider>
        <GlobalStyle />
        <AppContainer>
          <header>
            <Navbar></Navbar>
          </header>
          <MainContent>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </UserProvider>
    </>
  );
}

export default App;
