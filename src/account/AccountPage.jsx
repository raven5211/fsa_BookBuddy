import "./account.css";

import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import ReservationsList from "./ReservationsList";
import { Link } from "react-router";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const { token, getUser } = useAuth();

  async function attemptGetUser() {
    const data = await getUser();
    setUser(data);
  }

  useEffect(() => {
    attemptGetUser();
  }, [token]);

  return (
    <>
      {user ? (
        <>
          <h1>Welcome{user.firstname ? `, ${user.firstname}` : ""}!</h1>
          <p>Your email on file with us is {user.email}</p>
        </>
      ) : (
        <p>
          Please <Link to={"/login"}>log in</Link> to see your account.
        </p>
      )}
      {token && <ReservationsList />}
    </>
  );
}
