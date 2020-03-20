import { RECEIVE_USER, GET_CURRENT_USER } from "../../actions/user_actions";

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_CURRENT_USER:
      return Object.assign({}, action.friends);
    default:
      return state;
  }
};

export default friendsReducer;