import React from 'react';
import { withRouter } from 'react-router-dom';


// #AC
class ChannelChatRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] }
    this.bottom = React.createRef();

    this.loadMessages = this.loadMessages.bind(this);
  }

  loadMessages() {
    let { fetchMessages, chatroom_id, users } = this.props;
    fetchMessages(chatroom_id)
      .then(
        ({ messages }) => {
          let messagesInfo = Object.values(messages).map(
            message => { //NOTE: USEFUL FOR HANDLING DATES
              let created_at, len;
              let date_now = new Date(Date());
              let message_date = new Date(message.created_at);
              if (date_now.toDateString() !== message_date.toDateString()) // TODO1: CHANGE TIME, AND MAYBE SAVE DATE_NOW SOMEWHERE ELSE INSTEAD OF CONSTANTLY RECREATING IT
                created_at = message_date.toLocaleDateString();
              else {
                created_at = message_date.toLocaleTimeString();
                len = created_at.length;
                created_at = created_at.slice(0, len - 6) + created_at.slice(len - 3);
              }
              return {
                body: message.body,
                created_at: created_at,
                name: users[message.user_id].email.split("@")[0]
              };
            }
          );
          this.setState({ messages: messagesInfo });
        }
      );
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" }, //AC: MUST MATCH THE NAME OF THE CLASS IN CHAT_CHANNEL.RB
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function (data) {
          return this.perform('speak', data);
        }
      }
    );

    this.loadMessages();
  }

  render() {
    // console.log(this.state);
    if (!this.props.chatroom) return (
      <div>
        Loading...
      </div>
    );

    console.log(this.props.chatroom);

    let { chatroom } = this.props;

    return (
      <div className="chatroom-container">
        <div className="chatroom-header">
          <div className="chatroom-header-info">
            <i className="fas fa-user-circle"></i>
            <h1 className="chatroom-user-header">{chatroom.other_users[0]}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ChannelChatRoom);