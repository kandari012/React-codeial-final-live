import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    //will save user input in react state
    this.state = {
      email: "",
      password: "",
    };
  }
  // on button click will prevent submit default prop
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
  };
  // on input chnage will capture the value
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Register</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <input type="string" placeholder="name" required />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Register</button>
        </div>
      </form>
    );
  }
}

export default Register;
