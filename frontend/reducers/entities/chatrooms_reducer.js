import {
  RECEIVE_CHATROOM,
  RECEIVE_CHATROOMS,
  JOIN_CHATROOM
} from '../../actions/chatroom_actions';
import { RECEIVE_USER } from "../../actions/user_actions";

const chatroomsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return action.chatrooms;
    case RECEIVE_CHATROOM:
      // debugger;
      const newChatroom = { [action.chatroom.id]: action.chatroom.chatroom };
      return Object.assign({}, state, newChatroom);

    case RECEIVE_USER: 
      
      return Object.assign({}, action.chatrooms);
    default:
      return state;
  }
};

export default chatroomsReducer;