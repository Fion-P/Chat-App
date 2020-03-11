import React from "react";
import NavBar from "./nav-bar/nav_bar";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Homepage from "./homepage/homepage";
import { ProtectedRoute } from "../util/route_util";
import LoggedHomeContainer from "./logged_in_page/logged_home_container";

const App = () => (
  <div>
    {/* < NavBar /> */}
    <Switch>
      < ProtectedRoute exact path="/:userId" component={LoggedHomeContainer}/>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
