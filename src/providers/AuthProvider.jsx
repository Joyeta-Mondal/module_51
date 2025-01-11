import React, { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const AuthInfo = {
    name: "Tusher Joyeta",
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
