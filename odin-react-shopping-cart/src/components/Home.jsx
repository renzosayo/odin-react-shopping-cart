import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <p>
        This is the final project of the React course of The Odin Project. The
        app utilizes concepts such as state management, hooks, single page apps
        through routing and many more.{" "}
      </p>
      <Link to="/shop">Shop now</Link>
    </div>
  );
}
