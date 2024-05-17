import { Link } from "react-router-dom";

import { useData } from "../context/Authcontext";

import "../style/Home.scss";

export default function Home() {
  const { user } = useData();
  return (
    <div className="HomeContainer">
      <p className="welcome">Bienvenue {user.username} </p>
      <h1>Le test de personnalité de Niavlys</h1>

      <p>
        Entrez dans l'univers captivant de "PersonaliTREE", conçu pour vous
        révéler la quintessence de votre être à travers le prisme de la nature.
        En m'inspirant de la majesté et de la complexité des arbres, j'ai créé
        ce projet avec sérieux, mais aussi avec une touche d'excentricité.
        "PersonaliTREE" vous offre une exploration unique de votre essence
        intérieure, en vous invitant à vous connecter à la sagesse et à la
        beauté des arbres. À travers ce quiz, je vous accompagne dans un voyage
        introspectif, où chaque réponse vous rapproche de la compréhension de
        vous-même. Loin d'être seulement une fantaisie, "PersonaliTREE" est une
        invitation à la réflexion profonde et à la découverte de soi.
        Rejoignez-moi dans cette exploration fascinante où la nature et l'humain
        se rencontrent, et découvrez ce que votre connexion avec le monde
        végétal révèle sur votre être intérieur.{" "}
      </p>

      <Link to="/quizz">
        <button type="button">Commencez le test</button>
      </Link>
    </div>
  );
}
