import React from "react";
import PostItem from "./post_item";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "", 
      profile_id: this.props.user_id
    };

    this.update = this.update.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.user_id);
    this.props.fetchUser(this.props.user_id);

    let sidebarChats = document.querySelectorAll(".chat-item");

    sidebarChats.forEach(chat => {
      chat.style.background = "white";
    });
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  createPost(e) {
    e.preventDefault();

    if (this.state.body.length > 0) {
      const post = Object.assign({}, this.state);
      this.props.createPost(post);
  
      this.setState({ body: "" });
    }
  }



  render() {

    let {currentUser, posts, user} = this.props;

    if (!user) return (
      <div className="chat-load">
        Loading...
      </div>
    );

    let memberSince = new Date(user.created_at).toDateString();

    // let url = user.profile_pic|| "anon-user.png";
    // let profile_pic = <img className="profile-photo" src={url} />;
    // console.log(this.props);
    let profile_pic = <i className="fas fa-user-circle"></i>;

    if (user.profile_pic) {
      profile_pic = <img className="profile-photo" src={user.profile_pic} />
    }

    return (
      <div className="profile-container">

        <div className="profile-header-container">
          <div className="profile">

            <div className="profile-left">
              {profile_pic}
            </div>

            <div className="profile-right">
              <div className="profile-header-fname">
                {user.first_name} {user.last_name}
              </div>
              <div className="profile-info">
                <div className="profile-info-item">
                  <span className="profile-info-item-label">Username:</span> {user.username}
                </div>
                <div className="profile-info-item">
                  <span className="profile-info-item-label">Member Since:</span> {memberSince}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-posts">
          <div className="profile-create-post-container">
            <div className="profile-create-post">
              <div className="profile-create-header">
                Create Post
              </div>
              <div className="post-text-box">
                <textarea
                  maxLength="255"
                  className="profile-create-post-textarea"
                  onChange={this.update("body")}
                  placeholder={`Write something to ${user.first_name}...`}
                  value={this.state.body}
                >
                </textarea>
              </div>
              <div className="create-post-btn-container">
                <button onClick={this.createPost} className="create-post-btn">Post</button>
              </div>
            </div>
          </div>

          <div className="profile-posts-index">
            {posts.map( post => {
              return <PostItem 
                post = {post}
                deletePost = {this.props.deletePost}
                key={post.id}
                user={user}
                currentUser={currentUser}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;