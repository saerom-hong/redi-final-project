import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1>mein bier</h1>
      </Link>
    </header>
  );
}
