import { Router } from "express";
import {
  getTodos,
  createTodo,
  removeTodo,
  modifyTodo,
  getTodosByUser,
} from "../modules/todos/todosController";

import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

router.get("/todos", verifyToken, getTodos);

router.post("/todos", createTodo);
router.delete("/todos/:id", removeTodo);
router.put("/todos/:id", modifyTodo);
router.get("/users/:user_id", getTodosByUser);

export default router;
