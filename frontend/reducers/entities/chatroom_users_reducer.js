import {
  RECEIVE_CHATROOM,
  RECEIVE_CHATROOMS,
  JOIN_CHATROOM
} from '../../actions/chatroom_actions';
import { GET_CURRENT_USER } from "../../actions/user_actions";

const chatroomUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case JOIN_CHATROOM:
      return Object.assign({}, state, { [action.chatroomUser.id]: action.chatroomUser });
    case GET_CURRENT_USER:
      if (action.chatroom_users ) {
        Object.values(action.chatroom_users).forEach(chatroom_user => {
          nextState[chatroom_user.id] = chatroom_user;
        });
      }
      return nextState;
    default:
      return state;
  }
};

export default chatroomUsersReducer;