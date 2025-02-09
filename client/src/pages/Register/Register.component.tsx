import React, { useState } from "react";
import { registerUser } from "../../services/usersService";
import { useUser } from "../../hooks/useUser";
import { Button } from "../../components/button/Button.component";
import {
  RegisterContainer,
  RegisterForm,
  FormGroup,
  Input,
  Select,
  Label,
  ErrorMessage,
  // SubmitButton,
  ButtonContainer,
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

      setUsername("");
      setEmail("");
      setPassword("");
      setRole("user");
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
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username:</Label>
          <Input
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
          <Label htmlFor="email">Email:</Label>
          <Input
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
          <Label htmlFor="password">Password:</Label>
          <Input
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

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="role">Role:</Label>
          <Select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={isLoading}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        </FormGroup>
        <ButtonContainer>
          <Button
            type="submit"
            disabled={isLoading}
            variant="success"
            textStyle="capitalize"
            size="medium"
            shape="softRounded"
            state={isLoading ? "disabled" : "default"}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </ButtonContainer>
      </RegisterForm>
    </RegisterContainer>
  );
};
