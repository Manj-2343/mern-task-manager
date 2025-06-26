import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="p-4">
      {user ? (
        <>
          <h2 className="text-2xl font-mono">Welcome, Mr. {user.name}</h2>
          <p className="text-2xl font-mono">Your email is {user.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <div className="text-xl text-red-600 font-semibold">
          <Link to={"/login"}>Please log in to view your dashboard.</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
