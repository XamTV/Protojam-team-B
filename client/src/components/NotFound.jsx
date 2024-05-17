import error from "../assets/images/404.jpg";
import "../style/NotFound.scss";

function NotFound() {
  return (
    <section className="NotFoundComponent">
      <img src={error} alt="sylvain" />
      <h1>Erreur 404</h1>
      <p>Le vaisseau de la vierge Marie n'a pas atterri sur cette page.</p>
    </section>
  );
}

export default NotFound;
