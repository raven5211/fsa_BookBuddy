import { createContext, useContext, useEffect, useState } from "react";
import App from "../App";
import axios from "axios";

//get api path from .env file
const API = import.meta.env.VITE_API;

//create context
const authContext = createContext();

//create provider
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  function attemptGetToken() {
    const localStorageToken = localStorage.getItem("authToken");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }

  useEffect(() => {
    attemptGetToken();
  }, []);

  useEffect(() => console.log(token), [token]);

  async function register(firstname, lastname, email, password) {
    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    const config = {
      "Content-type": "application/json",
    };

    const response = await axios.post(API + "/users/register", newUser, config);
    setToken(response.data);
    localStorage.setItem("authToken", response.data);
  }

  async function login(email, password) {
    const userInfo = {
      email: email,
      password: password,
    };

    const config = {
      "Content-type": "application/json",
    };

    const response = await axios.post(API + "/users/login", userInfo, config);
    setToken(response.data.token);
    localStorage.setItem("authToken", response.data.token);
  }

  function logout() {
    setToken(null);
    localStorage.removeItem("authToken");
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
