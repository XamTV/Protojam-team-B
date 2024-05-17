import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/Authcontext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useData();
  const navigate = useNavigate();

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

  const handleLogin = () => {
    axios.post(`${import.meta.env.VITE_SSH_URL}connect`, myJSON).then((res) => {
      if (res.data >= 1) {
        setUser({ username, isLogged: res.data });
        navigate("/home");
      }
    });
  };

  const handleRegister = () => {
    axios
      .post(`${import.meta.env.VITE_SSH_URL}register`, myJSON)
      .then((res) => {
        setUser({ username: res.data });
        navigate("/home");
      });
  };

  return (
    <section className="LoginComponent">
      <h1>PersonaliTREE</h1>
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
        <label htmlFor="pass">Password :</label>
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

      <button type="button" className="profile-button" onClick={handleLogin}>
        Se Connecter
      </button>

      <button type="button" className="profile-button" onClick={handleRegister}>
        S'enregistrer
      </button>
    </section>
  );
}

export default Login;
