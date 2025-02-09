import { Request, Response } from "express";
import pool from "../../config/dbConfig";

export const fetchTodos = async () => {
  const result = await pool.query("SELECT * FROM todos");
  // console.log("RESULT", result);
  return result.rows;
};

// Service: Fetch todos by user_id
export const fetchTodosByUser = async (user_id: number) => {
  const query = `
    SELECT * FROM todos 
    WHERE user_id = $1 OR created_by = $1 AND deleted = FALSE
  `;
  const result = await pool.query(query, [user_id]);
  return result.rows;
};

export const fetchTodoById = async (todo_id: number) => {
  const query = `
  SELECT * 
  FROM todos
  WHERE id = $1
  AND deleted = FALSE
  `;

  const result = await pool.query(query, [todo_id]);
  return result.rows;
};

export const addTodo = async (todoData: {
  title: string;
  description?: string;
  completed?: boolean;
  due_date?: Date;
  priority?: number;
  user_id?: number;
  created_by: number;
  tags?: string[];
  estimated_time?: number;
  notes?: string;
  color?: string;
  recurring_type?: string;
}) => {
  const {
    title,
    description = null,
    completed = false,
    due_date = null,
    priority = 3,
    user_id = null,
    created_by,
    tags = null,
    estimated_time = null,
    notes = null,
    color = null,
    recurring_type = null,
  } = todoData;

  const query = `
        INSERT INTO todos (
            title,
            description,
            completed,
            due_date,
            priority,
            user_id,
            created_by,
            tags,
            estimated_time,
            notes,
            color,
            recurring_type
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *;
    `;

  const values = [
    title,
    description,
    completed,
    due_date,
    priority,
    user_id,
    created_by,
    tags,
    estimated_time,
    notes,
    color,
    recurring_type,
  ];

  const result = await pool.query(query, values);
  return result.rows[0]; // Return the newly created todo
};

// Delete Todo (Soft Delete)
export const deleteTodo = async (req: Request, todo_id: number) => {
  const user_id = (req as any).user.id;

  const query = `
    SELECT * FROM todos
    WHERE id = $1 AND user_id = $2 AND deleted = FALSE;
  `;

  const result = await pool.query(query, [todo_id, user_id]);

  if (result.rows.length === 0) {
    throw new Error("Todo not found or not owned by the user");
  }

  const deleteQuery = `
    UPDATE todos
    SET 
      deleted = TRUE,
      deleted_at = CURRENT_TIMESTAMP
    WHERE id = $1
    RETURNING *;
  `;
  const deleteResult = await pool.query(deleteQuery, [todo_id]);

  return deleteResult.rows[0]; // Return only the deleted todo data
};

// Service: Update a todo by id
export const updateTodo = async (
  todo_id: number,
  todoData: Partial<{
    title: string;
    description?: string;
    completed?: boolean;
    due_date?: Date;
    priority?: number;
    tags?: string[];
    estimated_time?: number;
    notes?: string;
    color?: string;
    recurring_type?: string;
  }>
) => {
  const {
    title,
    description,
    completed,
    due_date,
    priority,
    tags,
    estimated_time,
    notes,
    color,
    recurring_type,
  } = todoData;

  const query = `
    UPDATE todos
    SET 
      title = COALESCE($1, title),
      description = COALESCE($2, description),
      completed = COALESCE($3, completed),
      due_date = COALESCE($4, due_date),
      priority = COALESCE($5, priority),
      tags = COALESCE($6, tags),
      estimated_time = COALESCE($7, estimated_time),
      notes = COALESCE($8, notes),
      color = COALESCE($9, color),
      recurring_type = COALESCE($10, recurring_type),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $11
    RETURNING *;
  `;

  const values = [
    title,
    description,
    completed,
    due_date,
    priority,
    tags,
    estimated_time,
    notes,
    color,
    recurring_type,
    todo_id,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};
