import { connect } from "react-redux";
import Signup from "./signup";
import { signup, clearSessionErrors, login } from "../../actions/session_actions";

const mSTP = (state) => {
  return ({
    errors: state.errors
  });
};

const mDTP = dispatch => {
  return ({
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  });
};

export default connect(mSTP, mDTP)(Signup);