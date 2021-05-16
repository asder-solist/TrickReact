import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "../Auth.css";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3000/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="Auth">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />

        <NavLink style={{ textDecoration: "none" }} to="/" onClick={register}>
          Register
        </NavLink>
      </div>
    </div>
  );
}
