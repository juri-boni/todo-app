import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware";
import { checkRole } from "../middlewares/checkRole";

import {
  createUser,
  handleLogin,
  getAllUsers,
} from "../modules/users/usersController";

const router = Router();
router.get("/", verifyToken, checkRole(["admin"]), getAllUsers);
router.post("/register", createUser);
router.post("/login", handleLogin);

export default router;
