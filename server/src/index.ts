import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import todosRoutes from "../routes/todosRoutes";
import userRoutes from "../routes/usersRoutes";

// const crypto = require("crypto");

// const jwtSecret = crypto.randomBytes(64).toString("hex");
// console.log("jwtSecret ", jwtSecret);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();
// Enable CORS for all routes
app.use(cors());
const PORT = process.env.PORT || 3000;
// console.log(process.env.PORT);

app.use(express.json());
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  res.status(statusCode).json({ message: "Something went wrong!" });
});
app.use("/api", todosRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
