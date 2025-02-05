import { todo } from "node:test";

const API_URL_TODOS = "http://localhost:3000/api/todos";
const API_URL_USERS = "http://localhost:3000/api/users";

export const createTodo = async (
  token: string,
  todoData: {
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
  }
) => {
  try {
    const response = await fetch(`${API_URL_TODOS}`, {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to create todo. Status: ${response.status}`);
    }

    return await response.json(); // Return the parsed response
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error; // Let the caller handle the error
  }
};

export const deleteTodo = async (token: string, todoId: number) => {
  console.log("SERVICE: trying to delete todo");
  try {
    const response = await fetch(`${API_URL_TODOS}/${todoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response);

    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const getAllTodosByUserId = async (token: string, userId: number) => {
  // console.log("GETTING TODOS with token ", token);

  try {
    const response = await fetch(`${API_URL_USERS}/${userId}/todos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(response);

    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const getTodo = async (token: string, todoId: number) => {
  console.log("GETTING TODO WITH ID ", todoId);
  console.log(`route ${API_URL_TODOS}/${todoId}`);
  try {
    const response = await fetch(`${API_URL_TODOS}/${todoId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      console.log("!response.ok");
      throw new Error(`Failed to fetch todo ${todoId}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching todo number ${todoId}`, error);
  }
};
