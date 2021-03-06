import React from "react";
import { withRouter } from "react-router-dom";

class UserSearchItem extends React.Component {

  constructor(props) {
    super(props);
    this.createChat = this.createChat.bind(this);
  }

  createChat() {
    let { user, createChatroomUser, chatroom } = this.props;

    const chatUser = {
      chatroom_id: chatroom.id,
      user_id: user.id
    };

    createChatroomUser(chatUser)
      .then(() => this.props.history.push(`/chatroom/${chatroom.id}`));
  }

  render() {
    let { user } = this.props;

    let url = user.profile_pic || "anon-user.png";
    let profile_pic = <img className="post-profile-photo" src={url} />;

    return (
      <div className="user-search-item-container">
        <div className="user-search-item">

          <div className="user-search-profile">
            <div className="user-search-pic">
              {/* <i className="fas fa-user-circle"></i> */}
              {profile_pic}
            </div>
            <div className="user-search-info">
              <h1 className="user-fullname">{user.first_name} {user.last_name}</h1>
              <h2 className="user-search-username"><p className="user-search-uname-label">Username: </p>{user.username}</h2>
            </div>
          </div>

          <div className="new-message-search" onClick={this.createChat} >
            <i className="fas fa-plus"></i>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(UserSearchItem);