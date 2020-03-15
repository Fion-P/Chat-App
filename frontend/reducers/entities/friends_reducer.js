import { RECEIVE_USER } from "../../actions/user_actions";

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return action.friends;
    default:
      return state;
  }
};

export default friendsReducer;