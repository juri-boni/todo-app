import { Router } from "express";
import {
  getTodos,
  createTodo,
  removeTodo,
  modifyTodo,
  getTodosByUser,
} from "../modules/todos/todosController";

import { verifyToken } from "../middlewares/authMiddleware";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

router.get("/todos", verifyToken, checkRole(["admin"]), getTodos);

router.post("/todos", verifyToken, checkRole(["user"]), createTodo);
router.delete("/todos/:id", verifyToken, checkRole(["user"]), removeTodo);
router.put("/todos/:id", verifyToken, checkRole(["user"]), modifyTodo);
router.get("/users/:user_id", verifyToken, checkRole(["user"]), getTodosByUser);

export default router;
