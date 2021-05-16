import React, { Component, useState } from "react";
import Axios from "axios";
import "./Raspisanie.css";

const iconv = require("iconv-lite");

let place = 0;

export class Raspisanie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      list: [],
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:3000/monday21").then((response) => {
      this.setState({
        monday: response.data,
        list: [...this.state.list, true],
      });
    });
    Axios.get("http://localhost:3000/tuesday21").then((response) => {
      this.setState({
        tuesday: response.data,
        list: [...this.state.list, true],
      });
    });
    Axios.get("http://localhost:3000/wednesday21").then((response) => {
      this.setState({
        wednesday: response.data,
        list: [...this.state.list, true],
      });
    });
    Axios.get("http://localhost:3000/thursday21").then((response) => {
      this.setState({
        thursday: response.data,
        list: [...this.state.list, true],
      });
    });
    Axios.get("http://localhost:3000/friday21").then((response) => {
      this.setState({
        friday: response.data,
        list: [...this.state.list, true],
      });
    });
    Axios.get("http://localhost:3000/saturday21").then((response) => {
      console.log(response.data);
      this.setState({
        saturday: response.data,

        list: [...this.state.list, true],
      });
    });
  }

  render() {
    place = 0;
    return (
      <div className="grid-server-activity">
        <h4>AISTbd-21</h4>
        <h4>Monday</h4>
        <table className="conten-table">
          <thead>
            <tr>
              <th>Lesson,Subgroup</th>

              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {this.state.monday.map((val, key) => {
              return (
                <tr key={key} className="inner">
                  <td className="inner">
                    {val.discipline},{val.type},{val.subgroup}{" "}
                  </td>
                  <td className="inner">
                    {val.timeStart}-{val.timeStop}
                  </td>
                  <td className="inner">
                    {val.teacher},{val.cabinet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>Tuesday</h4>
        <table className="conten-table">
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tuesday.map((val, key) => {
              return (
                <tr key={key} className="inner">
                  <td className="inner">
                    {val.discipline},{val.type},{val.subgroup}{" "}
                  </td>
                  <td className="inner">
                    {val.timeStart}-{val.timeStop}
                  </td>
                  <td className="inner">
                    {val.teacher},{val.cabinet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>Wednesday</h4>
        <table className="conten-table">
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {this.state.wednesday.map((val, key) => {
              return (
                <tr key={key} className="inner">
                  <td className="inner">
                    {val.discipline},{val.type},{val.subgroup}{" "}
                  </td>
                  <td className="inner">
                    {val.timeStart}-{val.timeStop}
                  </td>
                  <td className="inner">
                    {val.teacher},{val.cabinet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>Thursday</h4>
        <table className="conten-table">
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {this.state.thursday.map((val, key) => {
              return (
                <tr key={key} className="inner">
                  <td className="inner">
                    {val.discipline},{val.type},{val.subgroup}{" "}
                  </td>
                  <td className="inner">
                    {val.timeStart}-{val.timeStop}
                  </td>
                  <td className="inner">
                    {val.teacher},{val.cabinet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>Friday</h4>
        <table className="conten-table">
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {this.state.friday.map((val, key) => {
              return (
                <tr key={key} className="inner">
                  <td className="inner">
                    {val.discipline},{val.type},{val.subgroup}{" "}
                  </td>
                  <td className="inner">
                    {val.timeStart}-{val.timeStop}
                  </td>
                  <td className="inner">
                    {val.teacher},{val.cabinet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>Saturday</h4>
        <table className="conten-table">
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Time</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {this.state.saturday.map((val, key) => {
              return (
                <tr key={key} className="inner">
                  <td className="inner">
                    {val.discipline},{val.type},{val.subgroup}{" "}
                  </td>
                  <td className="inner">
                    {val.timeStart}-{val.timeStop}
                  </td>
                  <td className="inner">
                    {val.teacher},{val.cabinet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Raspisanie;
