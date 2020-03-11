import { connect } from "react-redux";
import LoginPage from "./login_page";
import { login, clearSessionErrors } from "../../actions/session_actions";

const mSTP = (state) => {
  return ({
    errors: state.errors
  });
};

const mDTP = dispatch => {
  return ({
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    login: (user) => dispatch(login(user))
  });
};

export default connect(mSTP, mDTP)(LoginPage);