import { Link } from "react-router-dom";
import "../style/Navbar.scss";

function Navbar() {
  return (
    <section className="NavbarComponent">
      <h1>PersonaliTREE</h1>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/quizz">Quizz</Link>
        <Link to="/team">Team</Link>
      </nav>
    </section>
  );
}

export default Navbar;
