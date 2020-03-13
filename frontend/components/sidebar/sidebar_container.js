import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import { createChatroom, createChatroomUser} from "../../actions/chatroom_actions";
import Sidebar from "./sidebar";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createChatroom: (chatroom) => dispatch(createChatroom(chatroom)),
    createChatroomUser: (chatroomUser) => dispatch(createChatroomUser(chatroomUser))
  };
};

export default connect(mSTP, mDTP)(Sidebar);
