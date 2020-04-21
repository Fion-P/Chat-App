import React from "react";
import GreetingsContainer from "./greetings_container";
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from "react-router-dom";

export default () => {

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img
          src="nav-bar.png"
          className="nav-logo"
        />
      </div>
      <div className="nav-right">
        <div className="nav-greeting">
          <div className="github">
            <a href="https://github.com/Fion-P/Chat-App" target="_blank">
              Github
            </a>
          </div>
          <div className="github">
            <a href="http://fion-pang.com/" target="_blank">
              Portfolio
            </a>
          </div>
          <div className="github">
            <a
              href="https://www.linkedin.com/in/fion-pang-429172154/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <Link to="/signup" className="signup-btn">
              Get Started
            </Link>
          </div>
        </div>
        {/* <GreetingsContainer /> */}
      </div>
    </div>
  );
};