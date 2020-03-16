import React from 'react';
import { withRouter } from 'react-router-dom';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.setState({ body: "" });
    }
  }  

  render() {
      
    // console.log(this.state);

    return (
      <div className="chat-form">
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input className="chat-input" autoFocus
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Type a message..."
          />
          <input type="submit" value="" />
        </form>
      </div>
    )

  }
}

export default withRouter(MessageForm);