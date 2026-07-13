import { createContext, useContext, useState } from "react";
//todo: convert to axios

//get api path from .env file
const API = import.meta.env.VITE_API;

//create context
const authContext = createContext();

//create provider
export function AuthProvider({ children }) {
  const [token, setToken] = useState();

  async function register() {}

  async function login() {}

  function logout() {
    setToken(null);
  }

  const value = { token, register, login, logout };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

//use context
export function useAuth() {
  const context = useContext(authContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
