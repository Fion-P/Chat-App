import React from "react";
import {withRouter} from "react-router-dom";

class SidebarSearchItem extends React.Component {

  constructor(props) {
    super(props);
    this.createChat = this.createChat.bind(this);
  }

  createChat() {
    let { currentUser, user, createChatroom, createChatroomUser, clearSearch} = this.props;
    let chat = {title: "chatroom"};

    createChatroom(chat)
      .then(res => {
        const chatroom_id = res.chatroom.chatroom.id;
        const chatUser1 = {
          chatroom_id: chatroom_id,
          user_id: currentUser.id
        };
        
        const chatUser2 = {
          chatroom_id: chatroom_id,
          user_id: user.id
        };

        Promise.all([this.props.createChatroomUser(chatUser2), this.props.createChatroomUser(chatUser1)])
          .then((res) =>{ 
            debugger;
            console.log(res);
            this.props.history.push(`/chatrooom/${chatroom_id}`);
          });
      });


    clearSearch();
  }

  render() {
    let { user } = this.props;
    // console.log(user);
    return (
      <div className="sidebar-search-item-container">
        <div className="sidebar-search-item">

          <div className="sidebar-search-profile">
            <div className="sidebar-search-pic">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="sidebar-search-info">
                <h1>{user.first_name} {user.last_name}</h1>
            </div>
          </div>

          <div className="new-message-search" onClick={this.createChat}>
            <i title="new message" className="far fa-edit" ></i>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(SidebarSearchItem);