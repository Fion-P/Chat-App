import React from "react";
import GreetingsContainer from "./greetings_container";

export default () => {

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.8562-6/37794079_285442762012286_2170626851641229312_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=vwGcGTn0yz8AX-x6V4F&_nc_ht=scontent-sjc3-1.xx&oh=6108b7210bebccbcbd6588699a408c7e&oe=5E8ED974" 
        alt="" srcset=""
        className="nav-logo"/>
      </div>
      <div className="nav-right">
        <div className="nav-greeting">
          {/* <div className="login-btn">Login</div> */}
          <div className="github"><a href="http://"></a></div>
          <div className="signup-btn">Get Started</div>
        </div>
      </div>
    </div>
  );
};