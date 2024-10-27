import { Router } from "express";

import { createUser } from "../modules/users/usersController";

const router = Router();

router.post("/register", createUser);

export default router;
