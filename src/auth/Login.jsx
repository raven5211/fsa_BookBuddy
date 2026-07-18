import "./auth.css";

import { Link, useNavigate } from "react-router";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  async function tryLogin(formData) {
    setError(null);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await login(email, password);
      navigate("/books");
    } catch (e) {
      console.error(error);
      setError(e.message);
    }
  }

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={tryLogin}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
        {error && <p role="alert">{error}</p>}
      </form>
      <Link to={"/register"}>Need an account? Register here.</Link>
    </>
  );
}
