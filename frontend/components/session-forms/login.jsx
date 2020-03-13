import React from "react";
import { withRouter, Link } from "react-router-dom";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleInput(type) {
    this.setState({ [type]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
      // .then(res => this.props.history.push(`/${res.currentUser.id}`));
  }

  handleDemoUser() {
    this.setState({
      username: "",
      password: "",
    });

    this.inputUsername("DemoUser");
    setTimeout(() => {
      this.inputPassword("password");
    }, 1200);

  }

  inputUsername(username) {
    if (username.length <= 0) return;
    setTimeout(() => {
      let userArr = username.split("");
      let current = this.state.username;
      current += userArr.shift();
      this.setState({ username: current });
      let newName = userArr.join('');
      this.inputUsername(newName);
    }, 120);
  }

  inputPassword(password) {
    if (password.length <= 0) {
      const user = Object.assign({}, this.state);
      return this.props
        .login(user);
        // .then(res => this.props.history.push(`/${res.currentUser.id}`));
      // .then(this.props.history.push(`/users/${this.props.currentUser.id}`));
    }
    setTimeout(() => {
      let passArr = password.split("");
      let current = this.state.password;
      current += passArr.shift();
      this.setState({ password: current });
      let newPass = passArr.join('');
      this.inputPassword(newPass);
    }, 120);
  }

  render() {
    // flash errors
    let errors = this.props.errors.session.responseJSON || [];

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
            {/* <div cl></div> */}

            <div className="session-button-container">
              <button className="session-button" onClick={this.handleSubmit}>
                Sign In
              </button>
              <div className="errors">
                {errors[0]}
              </div>
            </div>
          </form>
        </div>
        <div className="demo-user">
          <h1 className="demo-user-header">Don't have an account?</h1>
          <div className="login-no-acct-container">

            <Link to="/signup" className="create-acct-btn" >
              <span>
                <i className="fab fa-facebook"></i>
              </span>
              <span className="demo-txt">  Create An Account </span>
            </Link>

            <h2 className="demo-create-or">or</h2>
            
            <button className="demo-btn" onClick={this.handleDemoUser}>
              <span>
                {/* <i className="fab fa-facebook"></i> */}
                <i className="fab fa-facebook-square"></i>
              </span>
              <span className="demo-txt"> Try Demo Login</span>
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(Login);