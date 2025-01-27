const API_URL_TODOS = "http://localhost:3000/api/todos";

export const getAllTodos = async (token: string, userId: number) => {
  console.log("GETTING TODOS with token ", token);

  try {
    const response = await fetch(`http://localhost:3000/api/todos/15`, {
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
