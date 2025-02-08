import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { loginUser } from "../../services/usersService";
import { Button } from "../../components/button/Button.component";
import {
  LoginFormContainer,
  LoginForm,
  InputLabelContainer,
  FormLabel,
  FormInput,
  // FormButton,
} from "./Login.styles";

export const Login = () => {
  const { setUser } = useUser();
  const { setToken } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    setError(null);
    setIsLoading(true);

    const userData = { email, password };

    try {
      const loggedUser = await loginUser(userData);
      const { token, user } = loggedUser;

      setUser(user);
      setToken(token);
      setEmail("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(loggedUser));
      if (user.role === "user") {
        navigate("/profile");
      } else if (user.role === "admin") {
        navigate("/admin");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={handleLogin}>
        <InputLabelContainer>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            disabled={isLoading}
            required
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            disabled={isLoading}
            required
          />
        </InputLabelContainer>
        {error && (
          <p style={{ color: "red", fontSize: "0.8em", textAlign: "center" }}>
            {error}
          </p>
        )}
        {/* <FormButton type="submit" disabled={isLoading || !email || !password}>
          {isLoading ? "Logging in..." : "Login"}
        </FormButton> */}
        <Button
          type="submit"
          variant="success"
          shape="softRounded"
          disabled={isLoading || !email || !password}
          state={!email || !password ? "disabled" : "default"}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </LoginForm>
    </LoginFormContainer>
  );
};
