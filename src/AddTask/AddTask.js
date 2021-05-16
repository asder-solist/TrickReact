import React, { Component, useState } from "react";
import Axios from "axios";
import "./AddTask.css";
import { NavLink } from "react-router-dom";

export default function Registration() {
  const [addtask, setAddTask] = useState("");

  Axios.defaults.withCredentials = true;

  const taskadd = () => {
    Axios.post("http://localhost:3000/addtask", {
      addtask: addtask,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="App">
      <div className="registration">
        <h1>Add task</h1>

        <input
          type="text"
          onChange={(e) => {
            setAddTask(e.target.value);
          }}
        />

        <NavLink
          style={{ textDecoration: "none" }}
          to="/copytasks"
          onClick={taskadd}
        >
          Add Task
        </NavLink>
      </div>
    </div>
  );
}
