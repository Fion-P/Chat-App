import React from "react";
import { withRouter, Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
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
    this.props.signup(user)
      .then(
      res => this.props.history.push(`/`),
      () => this.handleErrors()
      );
  }

  handleErrors() {
    // console.log(this.props.errors.session.responseJSON);
    let err = this.props.errors.session.responseText;
    // let errors = this.props.errors.session.responseJSON || [];

    this.checkError("First", ".input-fn", err, ".input-fn-err");
    this.checkError("Last", ".input-ln", err, ".input-ln-err");
    this.checkError("Username", ".input-uname", err, ".input-uname-err");
    this.checkError("Password", ".input-pw", err, ".input-pw-err");
  }

  checkError(param, htmlClass, err, errMsg) {
    let errors = this.props.errors.session.responseJSON || [];

    if (err.includes(param)) {
      // document.querySelector(htmlClass).classList.add("red-bord");
      document.querySelector(htmlClass).style.borderColor = "#d93125e3";
      document.querySelector(htmlClass).style.boxShadow = "0 0px 3px #d93125e3";
      document.querySelector(errMsg).style.display = "block";

      if (param === "Username" || param === "Password") {
        errors.forEach( err => {
          if (err.includes(param)) {
            document.querySelector(errMsg).innerHTML = err;
            // break;
          }
        });
      }
      
    } else {
      // document.querySelector(htmlClass).classList.remove("red-bord");
      document.querySelector(htmlClass).style.borderColor = "#bdbdbdaf";
      document.querySelector(htmlClass).style.boxShadow = "none";
      document.querySelector(errMsg).style.display = "none";
    }
  }

  handleDemoUser() {
    this.setState({
      first_name: "",
      last_name: "",
      username: "",
      password: ""
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
        .login(user)
        .then(res => this.props.history.push(`/`));
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
          <form>
            <div className="signup-input-container">
              <input
                name="first_name"
                className="signup-input input-fn"
                type="text"
                value={this.state.first_name}
                onChange={() => this.handleInput("first_name")}
                placeholder="First Name"
              />
              <label className="signup-input-label" htmlFor="first_name">
                First Name
              </label>
              <h2 className="input-fn-err">First name can't be blank</h2>
            </div>

            <div className="signup-input-container">
              <input
                name="last_name"
                className="signup-input input-ln"
                type="text"
                value={this.state.last_name}
                onChange={() => this.handleInput("last_name")}
                placeholder="Last Name"
                autoComplete="on"
              />
              <label className="signup-input-label" htmlFor="last_name">
                Last Name
              </label>
              <h2 className="input-ln-err">Last name can't be blank</h2>
            </div>

            <div className="signup-input-container">
              <input
                name="username"
                className="signup-input input-uname"
                type="text"
                value={this.state.username}
                onChange={() => this.handleInput("username")}
                placeholder="Username"
              />
              <label className="signup-input-label" htmlFor="username">
                Username
              </label>
              <h2 className="input-uname-err">Username can't be blank</h2>
            </div>

            <div className="signup-input-container">
              <input
                name="password"
                type="password"
                className="signup-input input-pw"
                value={this.state.password}
                onChange={() => this.handleInput("password")}
                placeholder="Password"
                autoComplete="on"
              />
              <label className="signup-input-label" htmlFor="password">
                Password
              </label>
              <h2 className="input-pw-err">Password can't be blank</h2>
            </div>

            <div className="session-form-redirect">
              <Link to="/login">Already have an account?</Link>
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

export default withRouter(Signup);