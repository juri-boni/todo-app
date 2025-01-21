// import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./context/userContext.js";
import { GlobalStyle } from "./styles/global.js";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register.js";

function App() {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <div>
          <h1>TODO APP</h1>
          <ul>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <Link to="/register"> Register</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
