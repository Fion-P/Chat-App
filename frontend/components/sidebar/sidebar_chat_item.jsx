import React from "react";
import { withRouter, Link }from "react-router-dom";

class SidebarChatItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleChatChange = this.handleChatChange.bind(this);
  } 

  handleChatChange() {
    let { chatroom } = this.props;
    // let sidebarChats = document.querySelectorAll(".chat-item");

    // sidebarChats.forEach( chat => {
    //   if (chat.id === chatroom.id.toString()) {
    //     chat.style.background = "#F5F5F5";
    //   } else {
    //     chat.style.background = "white";
    //   }
    // });

    this.props.history.push(`/chatroom/${chatroom.id}`);
  }
  
  render() {
    let { chatroom, chatroomUsers } = this.props;
    let user = chatroomUsers[chatroom.otherUserId];

    let profile_pic = <i className="fas fa-user-circle"></i>;

    if (user.profile_pic) {
      profile_pic = <img className="sidebar-chat-profile-photo" src={user.profile_pic} />
    }

    return (
      // <Link to={`/chatroom/${chatroom.id}`}> 
        <div className="chat-item-container">
          <div className="chat-item" id={`${chatroom.id}`} onClick={this.handleChatChange}>
            <div className="sidebar-chat-pic">
              {profile_pic}
            </div>
            <div className="sidebar-chat-info">
              <div>
                {chatroom.other_users.map( user => {
                  return <h1 key={user}>{user}</h1>
                })}
              </div>
              <div className="create-chat-per-chat">
                {/* <i title="new message" className="far fa-edit" ></i> */}
              </div>
            </div>
          </div>
        </div>
      // </Link>
    )
  }
}

export default withRouter(SidebarChatItem);