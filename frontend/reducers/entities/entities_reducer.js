import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import chatroomsReducer from "./chatrooms_reducer";
import messagesReducer from "./messages_reducer";
import chatroomUsersReducer from "./chatroom_users_reducer";
import friendsReducer from "./friends_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  chatrooms: chatroomsReducer,
  messages: messagesReducer,
  chatroomUsers: chatroomUsersReducer,
  friends: friendsReducer,
});

export default entitiesReducer;