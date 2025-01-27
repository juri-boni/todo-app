import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import pool from "../config/dbConfig";
import { sendError } from "../utils/errorHelper";

// import { Request } from "express";

// interface AuthenticatedRequest extends Request {
//   user?: {
//     id: number;
//     username: string;
//   };
// }

// const sendError = (res: Response, status: number, message: string) => {
//   res.status(status).json({ message });
// };

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization?.startsWith("Bearer")) {
    // res.status(401).json({ message: "No authorization in Headers" });
    sendError(res, 401, "No authorization in Headers");

    return;
  }

  const token = authorization?.split(" ")[1];

  if (!token) {
    // res.status(401).json({ message: "Access denied. No token provided" });
    sendError(res, 401, "Access denied. No token provided");
    // console.log("Access denied. No token provided");
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
      username: string;
    };
    const user = await fetchUserData(req, res, decoded.id);

    // console.log(decoded);
    // req.user = decoded;
    // console.log("USER?? ", user);
    (req as any).user = user; // Use `any` to bypass the type error
    next();
  } catch (error) {
    // res.status(403).json({ message: "Invalid or expired token." });
    sendError(res, 403, "Invalid or expired token.");

    // console.log("INVALID OR EXPIRED TOKEN");
    return;
  }
};

const fetchUserData = async (req: Request, res: Response, user_id: number) => {
  const query = `SELECT id, username, role FROM users WHERE id = $1`;

  const result = await pool.query(query, [user_id]);

  if (result.rows.length === 0) {
    // res.status(404).json({ message: "User not found" });
    sendError(res, 404, "User not found");
    return;
  }

  const user = result.rows[0];
  return user;
};
