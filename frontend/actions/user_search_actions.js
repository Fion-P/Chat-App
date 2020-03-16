import * as UsersSearchUtil from "../util/users_search_util";

export const RECEIVE_USER_SEARCH = "RECEIVE_USER_SEARCH";

const receiveUserSearch = users => {
  return {
    type: RECEIVE_USER_SEARCH,
    users
  };
};

export const searchUsers = query => dispatch => {
  return UsersSearchUtil.searchUsers(query)
    .then( users => dispatch(receiveUserSearch(users)));
};