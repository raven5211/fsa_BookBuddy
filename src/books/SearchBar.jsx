export default function SearchBar({ setSearchTerm }) {
  function search(formData) {
    setSearchTerm(formData.get("search"));
  }

  return (
    <form action={search}>
      <input type="text" name="search" placeholder="Search for a book" />
      <button>Search</button>
    </form>
  );
}
