import React from "react";

class Sidebar extends React.Component {

  handleLogout() {
    console.log("hit");
  }

  render() {
    let user = this.props.currentUser;

    return (
      <div className="sidebar">
        <div className="profile-area">
          <div className="user-info">
            {user.first_name} {user.last_name}
          </div>
          <div className="user-btns" >
            <span onClick={this.props.logout}>
              <i title="logout" className="fas fa-sign-out-alt" ></i>
            </span>
            <i title="new message" className="far fa-edit"></i>
          </div>
        </div>
        <div className="users-search">
          <i className="fas fa-search"></i>
          <input type="text" className="users-search-bar" placeholder="Search Messenger"/>
        </div>
      </div>
    )
  }
}

export default Sidebar;