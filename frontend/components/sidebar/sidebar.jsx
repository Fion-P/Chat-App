import React from "react";
import { withRouter } from "react-router-dom";
import SidebarSearchItem from "./sidebar_search_item";
import SidebarChatItem from "./sidebar_chat_item";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: [],
      chatrooms: [],
    };

    this.createChat = this.createChat.bind(this);
    this.handleHomeRedirect = this.handleHomeRedirect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(() => this.props.history.push("/"));
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
      // .then( res => {
      //   let chatrooms = Object.values(res.chatrooms) || [];
      //   this.setState({ chatrooms: chatrooms });
      // });
  }

  createChat() {
    let sidebarChats = document.querySelectorAll(".chat-item");

    sidebarChats.forEach(chat => {
      chat.style.background = "white";
    });

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

  handleSearch(e) {
    this.setState({ search: e.currentTarget.value });
    // let query = this.state.search.toLowerCase();

    // let chatrooms = this.props.chatrooms.filter(chatroom => {
    //   return chatroom.other_users[0].toLowerCase().includes(query);
    // });
    
    // this.setState({chatrooms: chatrooms});
  }

  handleHomeRedirect() {
    let sidebarChats = document.querySelectorAll(".chat-item");

    sidebarChats.forEach(chat => {
      chat.style.background = "white";
    });

    this.props.history.push("/");
  }

  clearSearch() {
    this.setState({search: ""});
  }

  render() {
    let user = this.props.currentUser;
    // let chatrooms = this.state.chatrooms;
    // console.log(this.props.chatrooms);
    let usersShow;
    let {users} = this.state;

    let query = this.state.search.toLowerCase() || '';
    let chatrooms = this.props.chatrooms;

    if (chatrooms) {
      chatrooms = chatrooms.filter(chatroom => {
        if (chatroom.other_users.length < 1) return false;
        return chatroom.other_users[0].toLowerCase().includes(query);
      });
    }

    return (
      <div className="sidebar">
        <div className="profile-area">
          <div className="user-info" onClick={this.handleHomeRedirect}>
            Chats
          </div>
          <div className="user-btns" >
            <span onClick={this.handleLogout}>
              <i title="logout" className="fas fa-sign-out-alt" ></i>
            </span>
            <span onClick={this.createChat}>
              <i title="new message" className="far fa-edit" ></i>
            </span>
          </div>
        </div>

        <div className="users-search">
          <i className="fas fa-search"></i>
          <input type="text" 
            onChange={this.handleSearch} 
            value={this.state.search}
            className="users-search-bar" 
            placeholder="Search Chats..."/>
        </div>

        <div className="sidebar-chatrooms">
          {chatrooms.map( chatroom => {
            if (chatroom.other_users.length > 0) {
              return < SidebarChatItem chatroom={chatroom} key={chatroom.title + chatroom.id}/>
            }
          })}
          {/* {usersShow} */}
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);