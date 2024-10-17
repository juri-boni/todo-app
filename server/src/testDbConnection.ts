import pool from "../config/dbConfig";

const testConnection = async () => {
  try {
    const client = await pool.connect();

    console.log("Connected to the database successfully!");
    client.release();
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

testConnection();
