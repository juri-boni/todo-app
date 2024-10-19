import { Request, Response } from "express";
import pool from "../../config/dbConfig";

//Controller function to get All todos

export const getTodos = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM todos");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send("Server error");
  }
};
