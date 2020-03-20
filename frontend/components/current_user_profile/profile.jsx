import React from "react";
import PostItem from "./post_item";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "", 
      profile_id: this.props.currentUser.id
    };

    this.update = this.update.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.currentUser.id);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  createPost(e) {
    e.preventDefault();

    const post = Object.assign({}, this.state);
    this.props.createPost(post);

    this.setState({ body: "" });
  }



  render() {

    let {currentUser, posts} = this.props;

    let memberSince = new Date(currentUser.created_at).toDateString();
    return (
      <div className="profile-container">
        
        <div className="profile-header-container">
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
                  placeholder="What's on your mind?"
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
              />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;