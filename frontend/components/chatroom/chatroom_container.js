import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Chatroom from './chatroom';
import { fetchMessages } from '../../actions/message_actions';
import {fetchUser, fetchCurrentUser} from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  const chat_id = parseInt(ownProps.match.params.chatroom_id);
  return {
    currentUser: state.entities.users[state.session.id],
    chatroom_id: chat_id,
    chatroom: state.entities.chatrooms[chat_id],
    messages: state.entities.messages,
    friends: state.entities.friends,  
    chatroomUsers: state.entities.chatroomUsers
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMessages: (chatroom_id) => dispatch(fetchMessages(chatroom_id)),
  fetchUser: (id) => dispatch(fetchCurrentUser(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom));