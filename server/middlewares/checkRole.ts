// Extract the user object from req ( populated by verifyToken )
// Check if the user's role matches the required roles passed as arguments to the middleware
/// Grant access if the role is valid, otherwise respond with a 403 Forbidden status
import { Request, Response, NextFunction } from "express";

export const checkRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Ensure the user is authenticated (added by verifyToken)
    // console.log((req as any).user);
    // console.log("allowedRoles  -  ", allowedRoles);
    if (!(req as any).user) {
      res.status(401).json({
        message: "Unauthorized. User not authenticated",
      });
      return;
    }

    // Check if the user's role is in the allowed roles
    if (!allowedRoles.includes((req as any).user.role)) {
      // console.log("ROLE: ", (req as any).user.role);
      res.status(403).json({
        message: "Forbidden. You do not have access to this resource",
      });
      return;
    }

    next();
  };
};
