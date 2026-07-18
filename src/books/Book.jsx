import "./books.css";

import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { getBook } from "../api/books";
import { useAuth } from "../auth/AuthContext";
import { reserveBook } from "../api/reservations";

export default function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  async function attemptReserveBook() {
    await reserveBook(token, id);
    navigate("/account");
  }

  async function loadBook() {
    const data = await getBook(id);
    setBook(data);
  }

  useEffect(() => {
    loadBook();
  }, []);

  return book ? (
    <div className="bookInfo">
      <figure>
        <img src={`${book.coverimage}`} alt={`Cover image of ${book.title}`} />
      </figure>
      <div>
        <h2>{book.title}</h2>
        <p>
          <b>{book.author}</b>
        </p>
        <p>{book.description}</p>
        {book.available
          ? token && (
              <button onClick={attemptReserveBook}>Reserve this book</button>
            )
          : token && <button disabled>Book is already reserved</button>}
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
}
