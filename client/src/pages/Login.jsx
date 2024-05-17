import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../style/Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const profile = {
    username,
    password,
  };

  const myJSON = JSON.stringify(profile);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="LoginComponent">
      <h1>PersonaliTREE</h1>
      <div className="champs">
        <form className="username">
          <label htmlFor="username">Username : </label>
          <input
            className="profile-input"
            type="text"
            value={username}
            onChange={handleUsername}
            id="username"
            name="username"
            required
          />
        </form>
        <form className="password">
          <label htmlFor="pass">Password : </label>
          <input
            className="profile-input"
            type="password"
            id="pass"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </form>
      </div>
      <div className="buttonsConnect">
        <Link to="/team">
          <button
            type="button"
            className="profile-button"
            onClick={() => {
              axios
                .post(`${import.meta.env.VITE_SSH_URL}connect`, myJSON)
                .then((res) => {
                  console.info(res.data);
                });
            }}
          >
            Se Connecter
          </button>
        </Link>
        <Link to="/home">
          <button
            type="button"
            className="profile-button"
            onClick={() => {
              axios
                .post(`${import.meta.env.VITE_SSH_URL}register`, myJSON)
                .then((res) => {
                  console.info(res.data);
                });
            }}
          >
            S'enregistrer
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Login;
