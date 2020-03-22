import React from 'react';
import { withRouter } from 'react-router-dom';
// import React, { useState } from "react";
import Picker from "emoji-picker-react";

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      emoji: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEmoji = this.toggleEmoji.bind(this);
    this.onEmojiClick = this.onEmojiClick.bind(this);
    this.closeEmoji = this.closeEmoji.bind(this);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let {chatroom, currentUser} = this.props;
    // let current
    if (this.state.body !== "") {

      App.cable.subscriptions.subscriptions[1].speak(
        {
         
            body: this.state.body,
            user_id: currentUser.id,
            chatroom_id: chatroom.id,
            // created_at: new Date().toLocaleTimeString(),

        }
      );
      this.setState({ body: "", emoji: false });
    }

    // let chats = document.querySelector('.chats');
    // // document.ge
    // chats.scrollTop = chats.scrollHeight;
  }  

  onEmojiClick(e, emojiObject) {
    let body = this.state.body;
    body += emojiObject.emoji;
    
    // console.log(body);
    this.setState({body: body});
  }

  toggleEmoji() {
    let shown = this.state.emoji;
    this.setState({emoji: !shown});
  }

  closeEmoji() {
    this.setState({ emoji: false });
  }

  render() {
      
    // console.log(this.state);

    let emojiClass = "";
    if (!this.state.emoji) {
      emojiClass = "emoji-hidden";
    }

    return (
      <div className="chat-form">
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input
            className="chat-input"
            autoFocus
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            onClick={this.closeEmoji}
            placeholder="Type a message..."
          />
          <input type="submit" value="" />
        </form>
        <div className="emoji-container">
          <div className="emoji-toggle" onClick={this.toggleEmoji}>
            <i className="far fa-grin"></i>
          </div>
          <div className={`emoji-picker-container ${emojiClass}`}>
            <Picker onEmojiClick={this.onEmojiClick} />
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(MessageForm);