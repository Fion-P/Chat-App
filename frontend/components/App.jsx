import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import Homepage from "./homepage/homepage";
import Sidebar from "./sidebar/sidebar_container";
import Signup from "./session-forms/signup_container";
import LoginPage from "./session-forms/login_page_container";
import CreateChat from "./create_chat/create_chat_container";
import Chatroom from "./chatroom/chatroom_container";
import CurrentUserProfile from "./current_user_profile/profile_container";
import UserProfiles from "./all_user_profile/profile_container";

const App = ({loggedIn}) => (
  loggedIn ? (
    <div className="logged-home">
      <Sidebar />
      <div className="logged-content">
        <Switch>
          <Route path="/profile/:profile_id" component={UserProfiles} />
          <Route path="/new_message/:chatroom_id" component={CreateChat} />
          <Route path="/chatroom/:chatroom_id" component={Chatroom} />
          <Route path="/" component={CurrentUserProfile} />
        </Switch>
      </div>
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
