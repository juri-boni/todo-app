const API_URL_TODOS = "http://localhost:3000/api/todos";

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

export const getAllTodos = async (token: string, userId: number) => {
  console.log("GETTING TODOS with token ", token);

  try {
    const response = await fetch(`${API_URL_TODOS}/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
