import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.friends;
    default:
      return state;
  }
};

export default friendsReducer;