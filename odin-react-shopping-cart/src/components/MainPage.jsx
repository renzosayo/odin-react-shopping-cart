import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <Outlet />
    </div>
  );
}
