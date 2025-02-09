import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

interface ProtectedRouteProps {
  role?: "admin" | "user";
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role }) => {
  const { user } = useUser();

  //if not logged in redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
