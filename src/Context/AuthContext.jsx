import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const initialAuth = JSON.parse(localStorage.getItem("isAuth")) || false;

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(initialAuth);

  const toggleAuth = () => {
    setIsAuth(true);
  };

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);

  const value = { isAuth: isAuth, toggleAuth: toggleAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
