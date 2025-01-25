export type User = {
  id: number; // or string, depending on your database setup
  username: string;
  email: string;
  role: "user" | "admin"; // Adjust if there are more roles
};
