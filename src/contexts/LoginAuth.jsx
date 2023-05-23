import { createContext, useState } from "react";

export const LoginAuth = createContext({});

export const LoginAuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({})
 
  return (
    <LoginAuth.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </LoginAuth.Provider>
  );
};
