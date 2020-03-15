import React from "react";
import { withRouter } from "react-router-dom";
import SidebarFriendItem from "./sidebar-friend-item";
import SidebarChatItem from "./sidebar_chat_item";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.createChat = this.createChat.bind(this);
    this.handleHomeRedirect = this.handleHomeRedirect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(() => this.props.history.push("/"));
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  createChat() {
    let user = this.props.currentUser;
    let chatroom = { title: "chat" };
    this.props.createChatroom(chatroom)
      .then( res => {
        const chatroom_id = res.chatroom.chatroom.id;
        const chatUser = {
          chatroom_id: chatroom_id,
          user_id: user.id
        };
        this.props.createChatroomUser(chatUser)
          .then(() => this.props.history.push(`/new_message/${chatroom_id}`));
      });
  }

  handleSearch() {
    
  }

  handleHomeRedirect() {
    let sidebarChats = document.querySelectorAll(".chat-item");

    sidebarChats.forEach(chat => {
      chat.style.background = "white";
    });

    this.props.history.push("/");
  }

  render() {
    let user = this.props.currentUser;
    let chatrooms = this.props.chatrooms;

    // debugger;
    return (
      <div className="sidebar">
        <div className="profile-area">
          <div className="user-info" onClick={this.handleHomeRedirect}>
            {user.first_name} {user.last_name}
          </div>
          <div className="user-btns" >
            <span onClick={this.handleLogout}>
              <i title="logout" className="fas fa-sign-out-alt" ></i>
            </span>
            {/* <span onClick={this.createChat}>
              <i title="new message" className="far fa-edit" ></i>
            </span> */}
          </div>
        </div>

        <div className="users-search">
          <i className="fas fa-search"></i>
          <input type="text" onChange={this.handleSearch} className="users-search-bar" placeholder="Search Messenger"/>
        </div>

        <div className="sidebar-chatrooms">
          {chatrooms.map( chatroom => {
            return < SidebarChatItem chatroom={chatroom} key={chatroom.title + chatroom.id}/>
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);