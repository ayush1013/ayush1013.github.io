import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(true);
  };

  const value = { isAuth: isAuth, toggleAuth: toggleAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
