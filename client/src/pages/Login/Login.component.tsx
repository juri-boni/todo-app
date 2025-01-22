import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import { loginUser } from "../../services/usersService";

export const Login = () => {
  const { setUser } = useUser();
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
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null); // Reset error dynamically
          }}
          disabled={isLoading}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError(null); // Reset error dynamically
          }}
          disabled={isLoading}
          required
        />
        {error && (
          <p
            className="error-message"
            aria-live="polite"
            style={{ color: "red" }}
          >
            {error}
          </p>
        )}
        <button type="submit" disabled={isLoading || !email || !password}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
