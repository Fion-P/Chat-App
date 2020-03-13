import {
  RECEIVE_CHATROOM,
  RECEIVE_CHATROOMS,
  JOIN_CHATROOM
} from '../../actions/chatroom_actions';

const chatroomsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return action.chatrooms;
    case RECEIVE_CHATROOM:
      const newChatroom = { [action.chatroom.id]: action.chatroom };
      return Object.assign({}, state, newChatroom);
    case JOIN_CHATROOM:
      nextState = Object.assign({}, state);

      chatroom_id = action.chatroomUser.chatroom_id;
      user_id = action.chatroomUser.user_id;
      
      if (nextState[chatroom_id].users === undefined) nextState[chatroom_id].users = {};
      nextState[chatroom_id].users[user_id] = { [user_id]: { id: user_id } };

      return nextState;
    default:
      return state;
  }
};

export default chatroomsReducer;