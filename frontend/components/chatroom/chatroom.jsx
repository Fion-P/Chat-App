import React from 'react';
import { withRouter } from 'react-router-dom';
import MessageForm from "./message_form";
import { ChatItem } from "./chat_item";


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
      .then( data => {
        this.setState({messages: Object.values(data.messages)});
      });
  }

  componentDidMount() {
    this.loadMessages();
    
    App.cable.subscriptions.create(
      { channel: "ChatChannel" }, //AC: MUST MATCH THE NAME OF THE CLASS IN CHAT_CHANNEL.RB
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data)
          });
        },
        speak: function (data) {
          return this.perform('speak', data);
        }
      }
    );

  }




  componentDidUpdate(oldProps) {
    // console.log(this.props);
    if (this.props.match.params.chatroom_id !== oldProps.match.params.chatroom_id) this.loadMessages();

    let sidebarChats = document.querySelectorAll(".chat-item");
    const chatId = this.props.match.params.chatroom_id;

    sidebarChats.forEach(chat => {
      if (chat.id === chatId) {
        chat.style.background = "#F5F5F5";
      } else {
        chat.style.background = "white";
      }
    });

  }

  render() {
    if (!this.props.chatroom) return (
      <div>
        Loading...
      </div>
    );

    let { chatroom, currentUser } = this.props;

    let {messages} = this.state;

    let chatDisplay;

    if (!messages || messages.length < 1) {
      chatDisplay = <div></div>
    } else {
      chatDisplay = (
        messages.map(msg => {
          let key = msg.id.toString() + msg.body;
          return (
            <div className="msg-item-container" key={key}>
              <ChatItem msg={msg} currentUser={currentUser} />
            </div>
          )
        })
      )
    }

    return (
      <div className="chatroom-container">
        <div className="chatroom-header-container">
          <div className="chatroom-header">
            <div className="chatroom-header-info">
              <i className="fas fa-user-circle"></i>
              <h1 className="chatroom-user-header">{chatroom.other_users[0]}</h1>
            </div>
          </div>
        </div>
        <div className="chats-container"> 
          <div className="chats">
            {chatDisplay}
          </div>
        </div>
        <div className="message-form-container">
          <MessageForm chatroom={chatroom} currentUser={currentUser} />
        </div>
      </div>
    )
  }
}

export default withRouter(ChannelChatRoom);