import React from "react";

export const ChatItem = ({msg, currentUser}) => {

  let style = msg.user_id === currentUser.id ? 'msg-sender' : 'msg-receiver';
  let innerstyle = msg.user_id === currentUser.id ? 'msg-sender-inner' : 'msg-receiver-inner';

  return (
    <div className={`chat-msg-item ${style}`}>
      <div className={`chat-msg ${innerstyle}`}>
        {msg.body}
      </div>
    </div>
  )
};