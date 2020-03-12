import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import Homepage from "./homepage/homepage";
import { ProtectedRoute } from "../util/route_util";
import LoggedHomeContainer from "./logged_in_page/logged_home_container";
import Sidebar from "./sidebar/sidebar_container";
import Signup from "./session-forms/signup_container";
import LoginPage from "./session-forms/login_page_container";
import ChatRoom from "./chat/ChatRoom";

const App = ({loggedIn}) => (
  loggedIn ? (
    <div className="logged-home">
      <Sidebar />
      <Switch>
        <Route path="/" component={ChatRoom} />
      </Switch>
    </div>
  ) : (
    <div className="logged-out">
      <Switch>
        {/* < ProtectedRoute exact path="/:userId" component={LoggedHomeContainer}/> */}
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  )
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) }
);

export default withRouter(connect(mapStateToProps)(App));
