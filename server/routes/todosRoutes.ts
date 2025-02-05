import { Router } from "express";
import {
  getTodos,
  createTodo,
  removeTodo,
  modifyTodo,
  getTodosByUser,
  getTodo,
} from "../modules/todos/todosController";

import { verifyToken } from "../middlewares/authMiddleware";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

router.get("/todos", verifyToken, checkRole(["admin"]), getTodos);

router.get(
  "/users/:user_id/todos",
  verifyToken,
  checkRole(["user"]),
  getTodosByUser
);

router.get("/todos/:id", verifyToken, checkRole(["user"]), getTodo);

router.post("/todos", verifyToken, checkRole(["user"]), createTodo);
router.delete("/todos/:id", verifyToken, checkRole(["user"]), removeTodo);
router.put("/todos/:id", modifyTodo);

export default router;
