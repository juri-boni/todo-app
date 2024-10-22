import { Router } from "express";
import {
  getTodos,
  createTodo,
  removeTodo,
  modifyTodo,
  getTodosByUser,
} from "../modules/todos/todosController";

const router = Router();

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", removeTodo);
router.put("/todos/:id", modifyTodo);
router.get("/users/:user_id", getTodosByUser);

export default router;
