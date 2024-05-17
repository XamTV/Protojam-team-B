import { Link } from "react-router-dom";
import "../style/Navbar.scss";
import { useData } from "../context/Authcontext";

function Navbar() {
  const { user } = useData();

  return (
    <section className="NavbarComponent">
      <h1>PersonaliTREE</h1>
      <nav className="navBar">
        <Link to={user === null ? "/*" : "/home"}>Home</Link>
        <Link to={user === null ? "/*" : "/quizz"}>Quizz</Link>
        <Link to={user === null ? "/*" : "/team"}>Team</Link>
        <Link to="/">Se Deco</Link>
      </nav>
    </section>
  );
}

export default Navbar;
