import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Auth.css";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        <Redirect to="/home" />;
        setRedirect(true);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="Auth">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={login}> Login </button>

        <NavLink style={{ textDecoration: "none" }} to="/register">
          Dont have account?
        </NavLink>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}
