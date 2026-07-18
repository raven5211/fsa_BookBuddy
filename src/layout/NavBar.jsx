import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function NavBar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <NavLink className="header left" to={"/"}>
        <img id="logo-image" src="/books.png" />
        <p>Book Buddy</p>
      </NavLink>
      <div className="header right">
        <NavLink to={"/books"}>Books</NavLink>
        {!token && <NavLink to={"/login"}>Log in</NavLink>}
        {token && <NavLink to={"/account"}>account</NavLink>}
        {token && <NavLink onClick={logout}>logout</NavLink>}
      </div>
    </header>
  );
}
