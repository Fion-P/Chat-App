import React from "react";
import PostItem from "./post_item";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        body: "", 
        profile_id: this.props.currentUser.id,
      },
      user: this.props.currentUser,
      photoUrl: null,
      photoFile: null,
      updateStatus: "",
    };

    this.update = this.update.bind(this);
    this.createPost = this.createPost.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.cancelPhoto = this.cancelPhoto.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.currentUser.id);

    let sidebarChats = document.querySelectorAll(".chat-item");

    sidebarChats.forEach(chat => {
      chat.style.background = "white";
    });
  }

  update(e) {
    let post = Object.assign({}, this.state.post);
    post.body = e.currentTarget.value;
    this.setState({post: post});
    // return e =>
    //   this.setState({ [field]: e.currentTarget.value });
  }
  
  createPost(e) {
    e.preventDefault();
    
    if (this.state.post.body.length > 0) {
      const post = Object.assign({}, this.state.post);
      this.props.createPost(post);
      post.body = "";
      this.setState({ post: post });
    }
  }
  
  uploadPhoto(e) {
    let photo = e.currentTarget.files[0];
    // let user = Object.assign({}, this.state.user);
    // user['photoUrl'] = photo;
    if (photo.type === "image/jpeg" || photo.type === "image/png") {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({ photoFile: photo, photoUrl: fileReader.result });
      };

      if (photo) {
        fileReader.readAsDataURL(photo);
      }
    } else {
      this.setState({updateStatus: "Error in uploading image"});
      
    }
  }

  cancelPhoto(e) {
    e.preventDefault();
    this.setState({ photoFile: null, photoUrl: null});
  }

  handleUpdate(e) {
    e.preventDefault();
    if (this.state.photoFile && this.state.photoUrl) {
      const formData = new FormData();
      formData.append('user[photo]', this.state.photoFile);
      formData.append('user[id]', this.state.user.id);
  
      this.props.updateCurrentUser(formData).then(() => {
        this.setState({ photoFile: null, photoUrl: null, updateStatus: "Update successful" });
      });
    } else {
      this.setState({updateStatus: "Error. Please try again later"});
    }
  }

  render() {

    let {currentUser, posts} = this.props;

    let memberSince = new Date(currentUser.created_at).toDateString();


    let url = this.state.photoUrl || currentUser.profile_pic || "anon-profile.png";
    let profile_pic = <img className="profile-photo" src={url} />

    let upload;

    if (this.state.photoUrl) {
      upload = <button className="cancel-photo" onClick={this.cancelPhoto}>Cancel</button>
    } else {
      upload = (
        <input
          type="file"
          onChange={this.uploadPhoto}
          className="upload-profile-btn"
          accept="image/x-png,image/gif,image/jpeg"
        />
      );
    }

    return (
      <div className="profile-container">

        <div className="profile-header-container">
          <div className="profile">

            <div className="profile-left">
              {profile_pic}
              {
                // this.state.photoFile ? <button className="cancel-photo" onClick={this.cancelPhoto}>Cancel</button> : upload = <input
                //   type="file"
                //   onChange={this.uploadPhoto}
                //   className="upload-profile-btn"
                // />
                upload
              }
            </div>

            <div className="profile-right">
              <div className="profile-header-fname">
                <div className="profile-header-name">
                  {currentUser.first_name} {currentUser.last_name}
                </div>
                <div className="update-profile">
                  <button onClick={this.handleUpdate} className="update-profile-btn"> Save Updates </button>
                </div>
                <div className="update-photo-msg">
                {this.state.updateStatus}
              </div>
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
          <div className="profile-create-post-container" id="profile-create-post-container-id">
            <div className="profile-create-post">
              <div className="profile-create-header">
                Create Post
              </div>
              <div className="post-text-box">
                <textarea
                  maxLength="255"
                  className="profile-create-post-textarea"
                  onChange={this.update}
                  placeholder="What's on your mind?"
                  value={this.state.post.body}
                >
                </textarea>
              </div>
              <div className="create-post-btn-container">
                <button onClick={this.createPost} className="create-post-btn">Post</button>
              </div>
            </div>
          </div>

          <div className="profile-posts-index" id="profile-posts-index-id">
            {posts.map( post => {
              return <PostItem 
                post = {post}
                deletePost = {this.props.deletePost}
                key={post.id}
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