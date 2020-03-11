import React from "react";
import { withRouter } from "react-router-dom";

class Signup extends React.Component {

  render() {
    let errors = this.props.errors.session.responseJSON || [];
    
    return (
      <div className="signup-container"> 
        Sign up page
      </div>
    )
  }

}

export default withRouter(Signup);