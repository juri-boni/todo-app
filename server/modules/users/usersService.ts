import pool from "../../config/dbConfig";
import bcrypt from "bcrypt";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const addUser = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<User | null> => {
  const { username, email, password } = userData;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const query = `
        INSERT INTO users (
           username, 
           email, 
           password
        )
        VALUES ($1, $2, $3)
        RETURNING *;
  `;

  const values = [username, email, hashedPassword];

  try {
    console.log("Adding user to database...");
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Database insert error:", error);
    throw new Error("Error creating user.");
  }
};
