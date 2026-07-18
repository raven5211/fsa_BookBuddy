import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { getReservations } from "../api/reservations";
import ReservationsListItem from "./ReservationsListItem";
import { Link } from "react-router";

export default function ReservationsList() {
  const [reservations, setReservations] = useState([]);
  const { token } = useAuth();

  async function syncReservations() {
    const data = await getReservations(token);
    setReservations(data);
  }

  useEffect(() => {
    syncReservations();
  }, []);

  return reservations ? (
    <ul>
      <h2>Your reservations</h2>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <ReservationsListItem
            key={reservation.id}
            reservation={reservation}
            syncReservations={syncReservations}
          />
        ))
      ) : (
        <p>
          You have not reserved any books yet. Browse{" "}
          <Link to={"/books"}>our catalog</Link>!
        </p>
      )}
    </ul>
  ) : (
    <p>loading...</p>
  );
}
