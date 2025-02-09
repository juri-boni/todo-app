import { Request, Response } from "express";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  fetchTodosByUser,
  fetchTodoById,
} from "./todoService";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await fetchTodos();

    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send("Server error");
  }
};

export const getTodosByUser = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    const todos = await fetchTodosByUser(parseInt(user_id));
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos by user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const todo = await fetchTodoById(parseInt(id));
    res.json(todo);
  } catch (error) {
    console.error("Error fetching todo by id:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todoData = {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      due_date: req.body.due_date,
      priority: req.body.priority,
      user_id: req.body.user_id,
      created_by: req.body.created_by,
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

export const removeTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedTodo = await deleteTodo(req, parseInt(id));
    res.json(deletedTodo);
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller: Update a todo
export const modifyTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todoData = req.body;

  try {
    const updatedTodo = await updateTodo(parseInt(id), todoData);
    res.json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
