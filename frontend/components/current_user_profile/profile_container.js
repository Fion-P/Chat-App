import { connect } from "react-redux";
import Profile from "./profile";
import {
  fetchPosts, 
  createPost, 
  deletePost
} from "../../actions/post_actions";

const mSTP = ( state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (id) => dispatch(fetchPosts(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    createPost: (id) => dispatch(createPost(id)),
  };
};

export default connect(mSTP, mDTP)(Profile);