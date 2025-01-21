import React, { useState } from "react";
import { useUser } from "../context/userContext";
import { loginUser } from "../services/usersService";

export const Login = () => {
  const { user, setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setUser(loggedUser);
      setEmail("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(loggedUser));
      console.log("Login successful:", loggedUser);
    } catch (error: any) {
      setError(error.message);
      console.log("Login Unsuccessfull", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
