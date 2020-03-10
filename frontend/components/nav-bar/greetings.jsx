import React from "react";

export default ({currentUser, logout}) => {

  let withUser = () => (
    <div className="nav-greeting">
      <div className="welcome-msg">
        Hi, {currentUser.first_name}
      </div>
      <div onClick={logout}>
        logout
      </div>
    </div>
  )

  let noUser = () => (
    <div className="nav-greeting">
      <div className="login-btn">Login</div>
      <div className="signup-btn">Get Started</div>
    </div>
  )

  return currentUser ? withUser() : noUser();
};