import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// import { Request } from "express";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    username: string;
  };
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log("HEADERS *** ", req.headers);
  const authorization = req.headers.authorization;
  // console.log(authorization?.startsWith("Bearer"));

  if (!authorization || !authorization?.startsWith("Bearer")) {
    res.status(401).json({ message: "No authorization in Headers" });
    console.log("No authorization in Headers");
    return;
  }

  const token = authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Access denied. No token provided" });
    console.log("Access denied. No token provided");
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
      username: string;
    };
    console.log(decoded);
    // req.user = decoded;

    (req as any).user = decoded; // Use `any` to bypass the type error
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token." });
    console.log("INVALID OR EXPIRED TOKEN");
    return;
  }
};
