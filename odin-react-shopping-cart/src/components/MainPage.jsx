import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function MainPage() {
  return (
    <div className="main-page">
      <Outlet />
      <Header />
      <Footer />
    </div>
  );
}
