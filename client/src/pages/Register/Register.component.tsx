import React, { useState } from "react";
import { registerUser } from "../../services/usersService";
// import { useUser } from "../../context/userContext";
import { useUser } from "../../hooks/useUser";
import {
  RegisterContainer,
  RegisterForm,
  FormGroup,
  ErrorMessage,
  SubmitButton,
} from "./Register.styles";

export const Register = () => {
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError(null);
    setIsLoading(true);

    const userData = { username, email, password, role };

    try {
      const response = await registerUser(userData);
      const { newUser } = response;

      setUser(newUser);
      // setUser(response);

      // Clear fields after success
      setUsername("");
      setEmail("");
      setPassword("");
      setRole("user");
    } catch (error: any) {
      setError(error.message || "Registration failed. Please try again.");
      console.error("Error during registration:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="How should I call you?"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (error) setError(null); // Reset error dynamically
            }}
            disabled={isLoading}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Tell me your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null); // Reset error dynamically
            }}
            disabled={isLoading}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="For the love of God, try not to use 'password'"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null); // Reset error dynamically
            }}
            disabled={isLoading}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={isLoading}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </SubmitButton>
      </RegisterForm>
    </RegisterContainer>
  );
};
