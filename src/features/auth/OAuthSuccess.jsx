// src/pages/OAuthSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");

    if (token && name && email) {
      const newUser = { name, email, token };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser); // Trigger state update
    } else {
      navigate("/login");
    }
  }, [navigate, setUser]);

  // Watch for user changes and navigate when ready
  useEffect(() => {
    if (user) {
      // Only navigate when user exists in context
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return <p>Logging you in...</p>;
};

export default OAuthSuccess;
