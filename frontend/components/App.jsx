import React from "react";
import NavBar from "./nav-bar/nav_bar";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Homepage from "./homepage/homepage";

const App = () => (
  <div>
    {/* < NavBar /> */}
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
