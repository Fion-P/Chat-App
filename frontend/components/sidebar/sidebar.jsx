import React from "react";

class Sidebar extends React.Component {

  render() {
    console.log(this.props)
    let user = this.props.currentUser;

    return (
      <div className="sidebar">
        <div className="profile-area">
          <div className="user-info">
            {user.first_name} {user.last_name}
          </div>
          <div className="user-btns" >
            <i title="logout" class="fas fa-sign-out-alt" onClick={this.props.logout}></i>
            <i title="new message" class="far fa-edit"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;