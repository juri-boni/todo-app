import React, { useState } from "react";
import { registerUser } from "../../services/usersService";
import { useUser } from "../../context/userContext";

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
      console.log("Registration successful:", newUser);

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
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (error) setError(null); // Reset error dynamically
            }}
            disabled={isLoading}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null); // Reset error dynamically
            }}
            disabled={isLoading}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
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
        </div>
        <div className="form-group">
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
        </div>
        {error && (
          <p
            className="error-message"
            aria-live="polite"
            style={{ color: "red" }}
          >
            {error}
          </p>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};
