import Members from "../components/Members";

import "../style/Team.scss";

export default function Team() {
  return (
    <div className="TeamContainer">
      <h2>Découvrez les membres de l'équipe</h2>
      <Members />
    </div>
  );
}
