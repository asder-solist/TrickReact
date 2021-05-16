import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="raspisanie">
        <NavLink style={{ textDecoration: "none" }} to="/choosegroup">
          Display schedule
        </NavLink>
      </div>
      <div className="addtask">
        <NavLink style={{ textDecoration: "none" }} to="/addtask">
          Add task
        </NavLink>
      </div>
      <div className="copytask">
        <NavLink style={{ textDecoration: "none" }} to="/copytasks">
          Show Tasks
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
