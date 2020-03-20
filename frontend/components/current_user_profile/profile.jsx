import React from "react";

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.currentUser.id);
  }

  render() {

    let {currentUser} = this.props;

    let memberSince = new Date(currentUser.created_at).toDateString();

    return (
      <div className="profile-container">
        <div className="profile">
          <div className="profile-left">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="profile-right">
            <div className="profile-header-fname">
              {currentUser.first_name} {currentUser.last_name}
            </div>
            <div className="profile-info">
              <div className="profile-info-item">
                <span className="profile-info-item-label">Username:</span> {currentUser.username}
              </div>
              <div className="profile-info-item">
                <span className="profile-info-item-label">Member Since:</span> {memberSince}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;