import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECIEVE_USER";
export const GET_CURRENT_USER = "GET_CURRENT_USER";

const receiveUser = payload => {
  const user = payload.user;
  const friends = payload.friends;
  const chatrooms = payload.chatrooms;

  return {
    type: RECEIVE_USER,
    user,
    friends,
    chatrooms
  };
};

const getCurrentUser = payload => {
  const user = payload.user;
  const friends = payload.friends;
  const chatrooms = payload.chatrooms;
  const chatroom_users = payload.chatroom_users;
  return {
    type: GET_CURRENT_USER,
    user,
    friends,
    chatrooms,
    chatroom_users
  };
};

export const fetchUser = id => dispatch => {
  return UserUtil.fetchUser(id)
    .then( (payload) => 
      dispatch(receiveUser(payload))
    );
};

export const fetchCurrentUser = id => dispatch => {
  return UserUtil.fetchUser(id)
    .then((payload) =>
      dispatch(getCurrentUser(payload))
    );
};

export const updateCurrentUser = user => dispatch => {
  return UserUtil.updateUser(user)
    .then((payload) =>{
      return dispatch(getCurrentUser(payload));
    });
};
