import * as ChatroomAPI from "../util/chatrooms_util";
import * as ChatroomUserAPI from "../util/chatroom_users_util";

export const RECEIVE_CHATROOM = 'RECEIVE_CHATROOM';
export const RECEIVE_CHATROOMS = 'RECEIVE_CHATROOMS';
export const JOIN_CHATROOM = 'JOIN_CHATROOM';

const receiveChatroom = chatroom => {
  return {
    type: RECEIVE_CHATROOM,
    chatroom
  };
};

const receiveChatrooms = chatrooms => {
  return {
    type: RECEIVE_CHATROOMS,
    chatrooms
  };
};

const joinChatroom = chatroomUser => {
  return {
    type: JOIN_CHATROOM,
    chatroomUser
  };
};

export const createChatroomUser = chatroomUser => dispatch => {
  return ChatroomUserAPI
    .createChatroomUser(chatroomUser)  
    .then((chatroomUser) => dispatch(joinChatroom(chatroomUser)));
};

export const fetchUserChatrooms = user_id => dispatch => {
  return ChatroomAPI
    .fetchUserChatrooms(user_id)
    .then( chatrooms => dispatch(receiveChatrooms(chatrooms)));
};

export const fetchChatroom = id => dispatch => {
  return ChatroomAPI
    .fetchChatroom(id)
    .then(chatroom => dispatch(receiveChatroom(chatroom)));
};

export const createChatroom = chatroom => dispatch => {
  return ChatroomAPI
    .createChatroom(chatroom)
    .then(chatroom => dispatch(receiveChatroom(chatroom)));
};