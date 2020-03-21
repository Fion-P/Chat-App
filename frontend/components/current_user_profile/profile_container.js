import { connect } from "react-redux";
import Profile from "./profile";
import {
  fetchPosts, 
  createPost, 
  deletePost
} from "../../actions/post_actions";
import {updateCurrentUser} from "../../actions/user_actions";

const mSTP = ( state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts)
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (id) => dispatch(fetchPosts(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    createPost: (id) => dispatch(createPost(id)),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user))
  };
};

export default connect(mSTP, mDTP)(Profile);