import React from "react";
import { withRouter } from "react-router-dom";

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    this.setState({ [type]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
      .then(res => this.props.history.push(`/${res.currentUser.id}`));
  }

  render() {
    let errors = this.props.errors.session.responseJSON || [];

    return (
      <div className="signup-container"> 
        <div className="signup-header">
          <img src="favicon.png" className="signup-icon"/>
          <h1 className="signup-title">Messenger</h1>
          <h2 className="sigup-title-h2">
            Connect with friends and the world around you on Facebook.
          </h2>
        </div>
        <div className="signup-form-container">
          <form>
            <div className="signup-input-container">
              <input
                name="first_name"
                className="signup-input"
                type="text"
                value={this.state.first_name}
                onChange={() => this.handleInput("first_name")}
                placeholder="First Name"
              />
              <label className="signup-input-label" htmlFor="first_name">First Name</label>
            </div>

            <div className="signup-input-container">
              <input
                name="last_name"
                className="signup-input"
                type="text"
                value={this.state.last_name}
                onChange={() => this.handleInput("last_name")}
                placeholder="Last Name"
                autoComplete="on"
              />
              <label className="signup-input-label" htmlFor="last_name">Last Name</label>
            </div>

            <div className="signup-input-container">
              <input
                name="username"
                className="signup-input"
                type="text"
                value={this.state.username}
                onChange={() => this.handleInput("username")}
                placeholder="Username"
              />
              <label className="signup-input-label" htmlFor="username">Username</label>
            </div>

            <div className="signup-input-container">
              <input
                name="password"
                type="password"
                className="signup-input"
                value={this.state.password}
                onChange={() => this.handleInput("password")}
                placeholder="Password"
                autoComplete="on"
              />
              <label className="signup-input-label" htmlFor="password">Password</label>
            </div>

            <div className="signup-button-container">
              <button className="signup-button" onClick={this.handleSubmit}>
                Sign Up
              </button>
              {/* <div className="errors">
                {errors[0]}
              </div> */}
            </div>
          </form>
        </div>
        <div className="singup-filler-bottom">
          <span className="signup-flink">
            <a href="https://github.com/Fion-P/Chat-App" target="_blank">Github</a>
          </span>
          <span className="signup-spacer">|</span>
          <span className="signup-flink">
            <a href="http://fion-pang.com/" target="_blank">Portfolio</a>
          </span>
          <span className="signup-spacer">|</span>
          <span className="signup-flink">
            <a href="https://www.linkedin.com/in/fion-pang-429172154/" target="_blank">LinkedIn</a>
          </span>
          <span className="signup-spacer">|</span>
          <span className="signup-flink">
            <a href="https://angel.co/fion-pang-1" target="_blank">AngelList</a>
          </span>
        </div>
      </div>
    )
  }

}

export default withRouter(Signup);