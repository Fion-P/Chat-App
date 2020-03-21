import {
  RECEIVE_CHATROOM,
  RECEIVE_CHATROOMS,
  JOIN_CHATROOM
} from '../../actions/chatroom_actions';
import { RECEIVE_USER, GET_CURRENT_USER } from "../../actions/user_actions";

const chatroomsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return action.chatrooms;
    case RECEIVE_CHATROOM:
      // debugger;
      const newChatroom = { [action.chatroom.id]: action.chatroom.chatroom };
      return Object.assign({}, state, newChatroom);

    case GET_CURRENT_USER: 
      if (action.chatrooms) {
        Object.values(action.chatrooms).forEach( chatroom => {
          nextState[chatroom.id] = chatroom;
        });
      }
      return nextState;
    default:
      return state;
  }
};

export default chatroomsReducer;