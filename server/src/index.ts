import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

import todosRoutes from "../routes/todosRoutes";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();
const PORT = process.env.PORT || 3000;
// console.log(process.env.PORT);

app.use(express.json());
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
app.use("/api", todosRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
