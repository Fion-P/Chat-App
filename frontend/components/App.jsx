import React, {useState} from "react";
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
import sidebar from "./sidebar/sidebar";

const App = ({loggedIn}) => {
  const [state, setState] = useState([
    {
      toggle: false,
    }
  ]);

  const handleToggle = () => {
    // let bool = !state[0].toggle;
    let newState = [{toggle: false}];
    // this.props.history.push(`/`);
    setState(newState);
    // debugger;
  };

  let contentIDName;
  let sidebarIDName;

  if (state[0].toggle) {
    contentIDName =  "show-content";
    sidebarIDName = "no-sidebar";
  } else {
    contentIDName = "no-content";
    sidebarIDName = "show-sidebar";
  }

  const clickContent = () => {
    let newState = [{ toggle: true }];
    setState(newState);
  };

  return (
    loggedIn ? (
      <div className="logged-home">
        <div className="sidebar-container" id={`${sidebarIDName}`}>

          <Sidebar clickContent={clickContent} />
        </div>
        <div className="logged-content" id={`${contentIDName}`}>
          <div className="toggle-container">
            <Link to="/">
              <div onClick={handleToggle} className="toggle">Back</div>
            </Link>
          </div>
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
  )
};

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) }
);

export default withRouter(connect(mapStateToProps)(App));
