import React from "react";
import ReactDOM from "react-dom";
import * as sessionAPIUtil from "./util/session_api_util";
import configureStore from "./store/store";
// import Root from "./components/root";
import Root from "./components/root";
import {login, logout} from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
