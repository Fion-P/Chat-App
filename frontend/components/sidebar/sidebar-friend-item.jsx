import React from "react";

class SidebarFriendItem extends React.Component {

  render() {
    let { friend } = this.props;
    console.log(friend);
    return (
      <div className="friend-item">
        <div className="sidebar-friend-pic">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="sidebar-friend-info">
          <div>
            <h1>{friend.friend_name}</h1>
          </div>
          <div className="create-chat-per-friend">
            {/* <i title="new message" className="far fa-edit" ></i> */}
          </div>
        </div>
      </div>
    )
  }
}

export default SidebarFriendItem;