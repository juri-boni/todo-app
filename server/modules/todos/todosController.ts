import { Request, Response } from "express";
// import pool from "../../config/dbConfig";
import { fetchTodos, addTodo } from "./todoService";

//Controller function to get All todos

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await fetchTodos();

    // const result = await pool.query("SELECT * FROM todos");
    // res.json(result.rows);
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send("Server error");
  }
};

// export const createTodo = async (req: Request, res: Response) => {
//   const { title } = req.body;
//   if (!title) {
//     res.status(400).json({ message: "Title is required" });
//   }
//   try {
//     const newTodo = await addTodo(title);
//     res.status(201).json(newTodo);
//   } catch (error) {
//     console.error("Error adding todo:", error);
//     res.status(500).send("Server error");
//   }
// };

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todoData = {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      due_date: req.body.due_date,
      priority: req.body.priority,
      user_id: req.body.user_id,
      created_by: req.body.created_by, // Ensure this is provided
      tags: req.body.tags,
      estimated_time: req.body.estimated_time,
      notes: req.body.notes,
      color: req.body.color,
      recurring_type: req.body.recurring_type,
    };

    const newTodo = await addTodo(todoData);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
