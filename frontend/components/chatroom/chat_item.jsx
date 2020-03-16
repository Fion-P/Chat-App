import React from "react";

export const ChatItem = ({msg, currentUser}) => {

  let style = msg.user_id === currentUser.id ? 'msg-sender' : 'msg-receiver';

  return (
    <div className={`chat-msg-item ${style}`}>
      {msg.body}
    </div>
  )
};