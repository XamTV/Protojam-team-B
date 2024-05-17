/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "../style/Result.scss";

function Result({ data }) {
  return (
    <section className="ResultComponent">
      <div className="result-picture">
        <img src={data.picture} alt={data.name} />
      </div>
      <h1>{data.name}</h1>
      <p>{data.text}</p>

      <Link to="/home">
        <button type="button">Retourner au menu</button>
      </Link>
    </section>
  );
}

export default Result;
