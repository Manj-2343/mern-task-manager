import { useState, useEffect, useContext, createContext } from "react";
import {
  getTheProfile,
  refreshToken,
  logoutUser,
} from "../services/authServices";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ start as true

  const restoreUserFromServer = async () => {
    try {
      const profile = await getTheProfile();
      setUser(profile);
    } catch (error) {
      try {
        await refreshToken();
        const profile = await getTheProfile();
        setUser(profile);
      } catch (error) {
        console.log("autoLogin not applicable");
      }
    } finally {
      setLoading(false); // ✅ loading complete
    }
  };

  const logout = async () => {
    try {
      await logoutUser(); // Calls backend logout
      localStorage.removeItem("user"); // Clear localStorage
      setUser(null); // Reset context
      console.log("User logged out & localStorage cleared"); // Debug log
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false); // Done!
    } else {
      restoreUserFromServer(); // Try backend auto-login
    }
  }, []);
  // Auto-login using refresh token 🔄 and Proper logout clearing both client & server 🚪
  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
