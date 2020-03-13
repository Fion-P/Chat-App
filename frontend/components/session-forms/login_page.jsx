import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoginPage extends React.Component {

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
    this.props.login(user)
      .then(res => this.props.history.push(`/${res.currentUser.id}`),
      () => this.handleErrors());
  }

  handleErrors() {
    document.querySelectorAll(".input-login-page ").forEach( el => {
      el.style.borderColor = "#d93125e3";
      el.style.boxShadow = "0 0px 3px #d93125e3";
    });

    document.querySelector(".login-page-errors").style.display = "block";
  }

  handleDemoUser() {
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
        .login(user)
        .then(res => this.props.history.push(`/${res.currentUser.id}`));
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
    let errors = this.props.errors.session.responseJSON || [];

    return (
      <div className="signup-container">
        <div className="signup-header">
          <Link to="/">
            <img src="favicon.png" className="signup-icon" />
          </Link>
          <h1 className="signup-title">Messenger</h1>
          <h2 className="sigup-title-h2">
            Connect with friends and the world around you on Facebook.
          </h2>
          <div onClick={this.handleDemoUser} className="session-page-demo">
            Try Demo User
          </div>
        </div>
        <div className="signup-form-container">
          <div className="login-page-err-container">
            <div className="login-page-errors">
              {errors[0]}
              {/* Invalid username/password */}
            </div>
          </div>
          <form>
            <div className="signup-input-container">
              <input
                name="username"
                className="signup-input input-login-page"
                type="text"
                value={this.state.username}
                onChange={() => this.handleInput("username")}
                placeholder="Username"
              />
              <label className="signup-input-label" htmlFor="username">
                Username
              </label>
            </div>

            <div className="signup-input-container">
              <input
                name="password"
                type="password"
                className="signup-input input-login-page"
                value={this.state.password}
                onChange={() => this.handleInput("password")}
                placeholder="Password"
                autoComplete="on"
              />
              <label className="signup-input-label" htmlFor="password">
                Password
              </label>
            </div>

            <div className="session-form-redirect">
              <Link to="/signup">Don't have an account?</Link>
            </div>

            <div className="signup-button-container">
              <button className="signup-button" onClick={this.handleSubmit}>
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="singup-filler-bottom">
          <span className="signup-flink">
            <a href="https://github.com/Fion-P/Chat-App" target="_blank">
              Github
            </a>
          </span>
          <span className="signup-spacer">|</span>
          <span className="signup-flink">
            <a href="http://fion-pang.com/" target="_blank">
              Portfolio
            </a>
          </span>
          <span className="signup-spacer">|</span>
          <span className="signup-flink">
            <a
              href="https://www.linkedin.com/in/fion-pang-429172154/"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>
          <span className="signup-spacer">|</span>
          <span className="signup-flink">
            <a href="https://angel.co/fion-pang-1" target="_blank">
              AngelList
            </a>
          </span>
        </div>
      </div>
    );
  }

}

export default withRouter(LoginPage);