import { Outlet } from "react-router";
import NavBar from "./NavBar";
import "./layout.css";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
