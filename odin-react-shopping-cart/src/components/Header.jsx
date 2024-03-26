import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1 className="store-name">The Whatever Store</h1>
      <div className="nav">
        <Link to="/">🏠 Home</Link>
        <Link to="/shop">👜 Shop</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </div>
  );
}
