import { connect } from "react-redux";
import CreateChat from "./create_chat";

const mSTP = (state) => {
  console.log("hit1");
  return ({
    errors: state.errors
  });
};

const mDTP = dispatch => {
  console.log("hit2");
  return ({
    
  });
};

export default connect(mSTP, mDTP)(CreateChat);