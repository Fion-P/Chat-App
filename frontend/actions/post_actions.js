import * as PostAPI from "../util/posts_util";

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};

const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};


const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
};

export const fetchPosts = user_id => dispatch => {
  return PostAPI
    .fetchPosts(user_id)
    .then( posts => dispatch(receivePosts(posts)));
};

export const createPost = post => dispatch => {
  return PostAPI
    .createPost(post)
    .then(post => dispatch(receivePost(post)));
};

export const deletePost = id => dispatch => {
  return PostAPI
    .deletePost(id)
    .then( () => dispatch(removePost(id)));
};
