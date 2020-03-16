import React from "react";
import { withRouter } from "react-router-dom";
import SidebarSearchItem from "./sidebar-friend-item";
import SidebarChatItem from "./sidebar_chat_item";

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: [],
    };

    this.createChat = this.createChat.bind(this);
    this.handleHomeRedirect = this.handleHomeRedirect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch(e) {
    this.setState({ search: e.currentTarget.value });
    let query = e.currentTarget.value;

    if (query.length > 0) {
      this.props.searchUsers(query)
        .then( (res) => {
          this.setState({users: Object.values(res.users)});
        });
    }
    // console.log(query);

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

    let usersShow;
    let {users} = this.state;

    if (this.state.search.length < 1) {
      usersShow = (
        chatrooms.map(chatroom => {
          return < SidebarChatItem chatroom={chatroom} key={chatroom.title + chatroom.id} />
        })
      );
    } else {
      if (users.length < 1) {
        usersShow = "Empty";
      } else {
        usersShow = (
          users.map( user => {
            let key = "userSearch" + user.id.toString();
            return < SidebarSearchItem user={user} key={key} />
          })
        );
      }
    }

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
          {/* {chatrooms.map( chatroom => {
            return < SidebarChatItem chatroom={chatroom} key={chatroom.title + chatroom.id}/>
          })} */}
          {usersShow}
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);