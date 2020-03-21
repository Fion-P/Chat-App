import React from "react";
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from "react-router-dom";

export default ({post, deletePost, currentUser}) => {
  
  let createdAt = new Date(post.created_at).toDateString() + " " + new Date(post.created_at).toLocaleTimeString();
  // const removePost = () => {
  //   console.log("hit");
  // };
  let deleteBtn;

  if ( post.author_id === currentUser.id || post.profile_id === currentUser.id) {
    deleteBtn = (
      <div className="delete-post" title="Delete Post" onClick={() => deletePost(post.id)} >x</div>
    )
  }

  let redirect_link = `/profile/${post.author_id}`
  if (post.author_id === currentUser.id) redirect_link='/'
  let url = post.author_profile || "anon-user.png";
  let profile_pic = <img className="post-profile-photo" src={url} />;

  return (
    <div className="post-container">
      {deleteBtn}
      <div className="each-post">
        <div className="post-left">
          {profile_pic}
        </div>
        <div className="post-right">
          <div className="post-header">
            <div className="post-author">
              <Link to={redirect_link}>{post.author_name}</Link>
            </div>
            <div className="post-time">
              {createdAt}
            </div>
          </div>
          <div className="post-body">
            {post.body}
          </div>
        </div>
      </div>
    </div>
  )
};