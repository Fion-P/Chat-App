import React from "react";
import { withRouter } from "react-router-dom";
import UserSearchItem from "./create_search_item";

class CreateChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: [],
    };

    // this.createChat = this.createChat.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // this.clearSearch = this.clearSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ search: e.currentTarget.value });
    let query = e.currentTarget.value;

    if (query.length > 0) {
      this.props.searchUsers(query)
        .then((res) => {
          this.setState({ users: Object.values(res.users) });
        });
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    if (!this.props.chatroom) return (
      <div>

      </div>
    )

    let usersShow = (
      <div className="create-search-empty">
        Loading...
      </div>
    );
    let { users } = this.state;

    let {chatroom, createChatroomUser} = this.props

    if (this.state.search.length < 1) {
      usersShow = (
        <div></div>
      );
    } else {
      if (users.length < 1) {
        usersShow = (
          <div className="create-search-empty">
            No users by that username found
          </div>
        );
      } else {
        usersShow = (
          users.map(user => {
            let key = "userSearch" + user.id.toString();
            return (
              <div key={key}>
                <UserSearchItem 
                  user={user} 
                  chatroom={chatroom}
                  createChatroomUser={createChatroomUser}
                  // key = {key}
                />
              </div>
            )
          })
        );
      }
    }

    return (
      <div className="create-chatroom-container">
        <div className="create-chat-header">
          <h1>Create a new chat</h1>
        </div>

        <div className="create-user-search">
          <input 
            type="text"
            onChange={this.handleSearch} 
            value={this.state.search}
            className="user-search-input"
            placeholder="Search for users by their username..."
          />

        </div>
        
        {usersShow}

      </div>
    )
  }
}

export default withRouter(CreateChat);