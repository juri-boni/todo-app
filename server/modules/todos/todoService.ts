import pool from "../../config/dbConfig";

export const fetchTodos = async () => {
  const result = await pool.query("SELECT * FROM todos");
  console.log("RESULT", result);
  return result.rows;
};

// export const addTodo = async (title: string) => {
//   const result = await pool.query(
//     "INSERT INTO todos (title) VALUES ($1) RETURNING *",
//     [title]
//   );
//   return result.rows[0];
// };

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
