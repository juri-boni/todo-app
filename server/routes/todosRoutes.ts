import { Router } from "express";
import { getTodos } from "../modules/todos/todosController";

const router = Router();

router.get("/todos", getTodos);

export default router;
