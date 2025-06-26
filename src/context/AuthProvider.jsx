import { useState, useEffect, useContext, createContext } from "react";
import {
  getTheProfile,
  refreshToken,
  logoutUser,
} from "../services/authServices"; // 👈 import logoutUser

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const autoLogin = async () => {
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
      setLoading(false);
    }
  };

  // ✅ Add logout functionality
  const logout = async () => {
    try {
      await logoutUser(); // Clear cookie on server
      setUser(null); // Clear state on frontend
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
