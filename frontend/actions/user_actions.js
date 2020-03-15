import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECIEVE_USER";

const receiveUser = payload => {
  const currentUser = payload.user;
  const friends = payload.friends;

  return {
    type: RECEIVE_USER,
    currentUser,
    friends
  };
};

export const fetchUser = id => dispatch => {
  return UserUtil.fetchUser(id)
    .then( (payload) => 
      dispatch(receiveUser(payload))
    );
};