import React from "react";

class SidebarSearchItem extends React.Component {

  render() {
    let { user } = this.props;
    // console.log(user);
    return (
      <div className="friend-item">
        <div className="sidebar-friend-pic">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="sidebar-friend-info">
          <div>
            <h1>{user.first_name} {user.last_name}</h1>
          </div>
          <div className="create-chat-per-friend">
            {/* <i title="new message" className="far fa-edit" ></i> */}
          </div>
        </div>
      </div>
    )
  }
}

export default SidebarSearchItem;