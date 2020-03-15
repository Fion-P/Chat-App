import React from "react";
import { withRouter }from "react-router-dom";

class SidebarChatItem extends React.Component {

  render() {
    let { chatroom } = this.props;

    return (
      <div className="chat-item-container">
        <div className="chat-item" onClick={() => this.props.history.push(`/chatroom/${chatroom.id}`)}>
          <div className="sidebar-chat-pic">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="sidebar-chat-info">
            <div>
              {chatroom.other_users.map( user => {
                return <h1 key={user}>{user}</h1>
              })}
            </div>
            <div className="create-chat-per-chat">
              {/* <i title="new message" className="far fa-edit" ></i> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SidebarChatItem);