import React from "react";


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    // debugger;
    this.props.login(user);
  }

  render() {

    return (
      <div className="login-form-container">
        <div className="login-slogan">
          <h1 className="login-slogan-h1">Be together,</h1>
          <h1 className="login-slogan-h1">whenever.</h1>
          <h2 className="login-slogan-h2">A simple way to text, video chat and</h2>
          <h2 className="login-slogan-h2">plan things all in one place.</h2>
        </div>
        <div className="login-form">
          <form>
            <div className="login-input-container">
              <input
                name="username"
                className="login-input"
                type="text"
                value={this.state.username}
                onChange={() => this.handleInput("username")}
                placeholder="Username"
              />
              <label className="login-input-label" htmlFor="username">Username:</label>
            </div>

            <div className="login-input-container">
              <input
                name="password"
                type="password"
                className="login-input"
                value={this.state.password}
                onChange={() => this.handleInput("password")}
                placeholder="Password"
                autoComplete="on"
              />
              <label className="login-input-label" htmlFor="password">Password:</label>
            </div>

            <div className="session-button-container">
              <button className="session-button" onClick={this.handleSubmit}>
                Sign In
            </button>
            </div>
          </form>
        </div>
        <div className="test"></div>
      </div>
    )
  }
}

export default Login;