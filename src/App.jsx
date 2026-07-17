import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import CatalogList from "./books/CatalogList";
import Book from "./books/Book";
import AccountPage from "./acount/AccountPage";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CatalogList />} />
        <Route path="/books" element={<CatalogList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
