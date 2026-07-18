import { Link } from "react-router";
import { returnBook } from "../api/reservations";
import { useAuth } from "../auth/AuthContext";
import { useEffect } from "react";

export default function ReservationsListItem({
  reservation,
  syncReservations,
}) {
  const { token } = useAuth();

  async function attemptReturnBook() {
    await returnBook(token, reservation.id);
    syncReservations();
  }

  return (
    <div className="reservation">
      <Link to={`/books/${reservation.bookid}`}>{reservation.title}</Link>
      <p>{reservation.author}</p>
      <button onClick={attemptReturnBook}>Return book</button>
    </div>
  );
}
