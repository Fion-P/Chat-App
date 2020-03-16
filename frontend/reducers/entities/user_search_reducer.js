import { RECEIVE_USER_SEARCH } from "../../actions/user_search_actions"

const userSearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_SEARCH:
      return Object.assign({}, action.users );
    default:
      return state;
  }
};

export default userSearchReducer;