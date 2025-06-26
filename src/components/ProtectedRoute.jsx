// components/ProtectedRoute.jsx
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // While loading user profile or token, don't show the route
  if (loading) return <div className="text-center text-xl">Loading...</div>;

  // If not logged in, redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // If authenticated, show the protected content
  return children;
};

export default ProtectedRoute;
