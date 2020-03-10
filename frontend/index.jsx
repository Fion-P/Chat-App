import React from "react";
import ReactDOM from "react-dom";
import * as sessionAPIUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  console.log("hit");
  // window.sessionAPIUtil = sessionAPIUtil;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to ChatApp</h1>, root);
});
