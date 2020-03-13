import { LOAD_MESSAGES } from '../../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOAD_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}

export default MessagesReducer;