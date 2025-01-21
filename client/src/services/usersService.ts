import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  role: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    } else {
      throw new Error("Network error. Please try again.");
    }
  }
};
