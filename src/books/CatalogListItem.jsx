import { NavLink } from "react-router";

export default function CatalogListItem({ book }) {
  return (
    <div className="catalogItem">
      <figure>
        <img
          className="coverImage"
          src={`${book.coverimage}`}
          alt={`Cover image of ${book.title}`}
        />
      </figure>
      <div>
        <h2>
          <NavLink to={`/books/${book.id}`}>{book.title}</NavLink>
        </h2>
        <p>
          <b>{book.author}</b>
        </p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}
