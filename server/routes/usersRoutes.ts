import { Router } from "express";
import { createUser, handleLogin } from "../modules/users/usersController";

const router = Router();
router.post("/register", createUser);
router.post("/login", handleLogin);

export default router;
