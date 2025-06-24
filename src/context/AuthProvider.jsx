import { useState, useEffect, useContext, createContext } from "react";
import { getTheProfile, refreshToken } from "../services/authServices";

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

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
