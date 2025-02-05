import pool from "../../config/dbConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const loginUser = async (email: string, password: string) => {
  //1. Query to find the user by email
  const query = `
     SELECT *
     FROM users
     WHERE email = $1
`;

  const result = await pool.query(query, [email]);

  //2. Check if user exists
  if (result.rows.length === 0) {
    throw new Error("User not found");
  }

  const user = result.rows[0];

  //3. Compare provided password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  //4. Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: "3h" }
  );

  return { token, user };
};

export const addUser = async (userData: {
  username: string;
  email: string;
  password: string;
  role: string;
}): Promise<User | null> => {
  const { username, email, password, role } = userData;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const query = `
        INSERT INTO users (
           username, 
           email, 
           password,
           role
        )
        VALUES ($1, $2, $3, $4)
        RETURNING *;
  `;

  const values = [username, email, hashedPassword, role || "user"];

  // console.log(query);

  try {
    // console.log("Adding user to database...");
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Database insert error:", error);
    throw new Error("Error creating user.");
  }
};

export const fetchUsers = async () => {
  try {
    const query = `
      SELECT id, username, email, role, created_at
      FROM users;
    `;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Database error in fetchUsers:", error);
    throw new Error("Database query failed");
  }
};
