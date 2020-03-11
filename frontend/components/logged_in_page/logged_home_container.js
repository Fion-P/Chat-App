import { connect } from "react-redux";
import LoggedHome from "./logged_home";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(LoggedHome);