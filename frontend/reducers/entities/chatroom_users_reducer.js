import {
  RECEIVE_CHATROOM,
  RECEIVE_CHATROOMS,
  JOIN_CHATROOM
} from '../../actions/chatroom_actions';

const chatroomUsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case JOIN_CHATROOM:
      return Object.assign({}, state, { [action.chatroomUser.id]: action.chatroomUser });
    default:
      return state;
  }
};

export default chatroomUsersReducer;