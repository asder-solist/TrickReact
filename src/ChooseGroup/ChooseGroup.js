import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ChooseGroup.css";

const ChooseGroup = () => {
  return (
    <div className="home">
      <h4>Choose a group</h4>
      <div className="raspisanie">
        <NavLink style={{ textDecoration: "none" }} to="/raspisaniea21">
          AISTbd-21
        </NavLink>
      </div>
      <div className="addtask">
        <NavLink style={{ textDecoration: "none" }} to="/raspisaniea22">
          AISTbd-22
        </NavLink>
      </div>
    </div>
  );
};

export default ChooseGroup;
