import { connect } from "react-redux";
import CreateChat from "./create_chat";
import { createChatroom, createChatroomUser } from "../../actions/chatroom_actions";
import { searchUsers } from "../../actions/user_search_actions";
import { fetchUser, fetchCurrentUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  const chat_id = parseInt(ownProps.match.params.chatroom_id);
  // console.log("hit1");
  return ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors,
    chatroom_id: chat_id,
    chatroom: state.entities.chatrooms[chat_id],
  });
};

const mDTP = dispatch => {
  // console.log("hit2");
  return ({
    createChatroom: (chatroom) => dispatch(createChatroom(chatroom)),
    createChatroomUser: (chatroomUser) => dispatch(createChatroomUser(chatroomUser)),
    searchUsers: (query) => dispatch(searchUsers(query)),
    fetchUser: (id) => dispatch(fetchCurrentUser(id)),
  });
};

export default connect(mSTP, mDTP)(CreateChat);