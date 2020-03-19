import React from "react";

class Profile extends React.Component {

  render() {
    // console.log(this.props);
    console.log(this.props.currentUser);
    let {currentUser} = this.props;
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header-picture">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="profile-header-uname">
            {currentUser.first_name} {currentUser.last_name}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;