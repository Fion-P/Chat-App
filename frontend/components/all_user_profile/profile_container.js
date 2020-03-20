import { connect } from "react-redux";
import Profile from "./profile";
import {
  fetchPosts, 
  createPost, 
  deletePost
} from "../../actions/post_actions";
import { fetchUser } from "../../actions/user_actions";

const mSTP = ( state, ownProps) => {
  const user_id = parseInt(ownProps.match.params.profile_id);
  return {
    currentUser: state.entities.users[state.session.id],
    user_id: user_id,
    posts: Object.values(state.entities.posts),
    user: state.entities.users[user_id],
    users: state.entities.users
  };
};

const mDTP = dispatch => {
  return {
    fetchPosts: (id) => dispatch(fetchPosts(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    createPost: (id) => dispatch(createPost(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(mSTP, mDTP)(Profile);