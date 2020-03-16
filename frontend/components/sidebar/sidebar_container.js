import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import { createChatroom, createChatroomUser} from "../../actions/chatroom_actions";
import { searchUsers } from "../../actions/user_search_actions";
import { fetchUser } from "../../actions/user_actions";
import Sidebar from "./sidebar";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    friends: Object.values(state.entities.friends),
    chatrooms: Object.values(state.entities.chatrooms),
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createChatroom: (chatroom) => dispatch(createChatroom(chatroom)),
    createChatroomUser: (chatroomUser) => dispatch(createChatroomUser(chatroomUser)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    searchUsers: (query) => dispatch(searchUsers(query))
  };
};

export default connect(mSTP, mDTP)(Sidebar);
