import React from "react";

export default ({post, deletePost}) => {
  
  let createdAt = new Date(post.created_at).toDateString() + " " + new Date(post.created_at).toLocaleTimeString();
  // const removePost = () => {
  //   console.log("hit");
  // };

  return (
    <div className="post-container">
      <div className="delete-post" title="Delete Post" onClick={() => deletePost(post.id)} >x</div>
      <div className="each-post">
        <div className="post-left">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="post-right">
          <div className="post-header">
            <div className="post-author">
              {post.author_name}
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