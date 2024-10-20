import { Router } from "express";
import { getTodos, createTodo } from "../modules/todos/todosController";

const router = Router();

router.get("/todos", getTodos);
router.post("/todos", createTodo);

export default router;
