import React, { Component, useState } from "react";
import Axios from "axios";
import "./CopyTask.css";
import { NavLink } from "react-router-dom";

const iconv = require("iconv-lite");

let place = 0;

export class CopyTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copytask: [],
      list: [],
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:3000/copytasks").then((response) => {
      console.log(response.data);
      this.setState({
        copytask: response.data,
        list: [...this.state.list, true],
      });
    });
  }

  render() {
    place = 0;
    return (
      <div className="grid-server-activity">
        <table className="conten-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.copytask.map((val, key) => {
              return (
                <tr key={key} className="inner">
                  <td className="inner">{val.task}</td>
                  <td className="inner">{val.date_add}</td>
                  <td className="inner">{val.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <NavLink to="/addtask" style={{ textDecoration: "none" }}>
          Add task
        </NavLink>
      </div>
    );
  }
}

export default CopyTask;
