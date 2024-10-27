import { Request, Response } from "express";
import { addUser } from "./usersService";
import pool from "../../config/dbConfig";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const { username, email, password } = userData;

    if (!username || !email || !password) {
      console.log("All fields are required!!");
      res.status(400).json({ message: "All fields are required!!" });
      return;
    }

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );
    if (existingUser.rows.length > 0) {
      console.log("Username or email already in use.");
      res.status(400).json({ message: "Username or email already in use." });
      return;
    }

    const newUser = await addUser(userData);
    // res.status(201).json(newUser);
    console.log("User registered successfully!");
    res.status(201).json({ message: "User registered successfully!", newUser });
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
