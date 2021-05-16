import React from "react";

import "./App.css";

import Home from "../Home/Home";

import Main from "../registration/pages/Main";
import Login from "../registration/pages/Login";
import Registration from "../registration/pages/Registration";
import RaspisanieA21 from "../Raspisanie/RaspisanieAistbd-21";
import RaspisanieA22 from "../Raspisanie/RaspisanieAistbd-22";
import ChooseGroup from "../ChooseGroup/ChooseGroup";
import AddTask from "../AddTask/AddTask";
import CopyTask from "../CopyTask/CopyTask";
import { NavLink } from "react-router-dom";

import { Route } from "react-router";

const App = () => {
  return (
    <div>
      <section className="s-page">
        <header className="s-header-profile">
          <div>
            <div id="app">
              <div id="wrapper">
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                  <h1 className="glitch">Home</h1>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
        <div className="main-content">
          <Route exact path="/" exact render={(props) => <Login />} />
          <Route
            exact
            path="/register"
            exact
            render={(props) => <Registration />}
          />
          <Route exact path="/main" exact render={(props) => <Main />} />
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/raspisaniea21" component={RaspisanieA21}></Route>
          <Route exact path="/raspisaniea22" component={RaspisanieA22}></Route>
          <Route exact path="/choosegroup" component={ChooseGroup}></Route>
          <Route exact path="/addtask" component={AddTask}></Route>
          <Route exact path="/copytasks" component={CopyTask}></Route>
        </div>
      </section>
      <footer className="footer">
        <div>Круто классно это органайзер</div>
      </footer>
    </div>
  );
};

export default App;
