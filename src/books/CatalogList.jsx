import "./books.css";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CatalogListItem from "./CatalogListItem";
import { getBooks } from "../api/books";

export default function CatalogList() {
  const [books, setBooks] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  async function syncBooks() {
    const data = await getBooks();
    setBooks(data);
  }

  useEffect(() => {
    syncBooks();
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <h1>Catalog</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ul>
        {books ? (
          books
            .filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((book) => <CatalogListItem key={book.id} book={book} />)
        ) : (
          <p>loading</p>
        )}
      </ul>
    </>
  );
}
