import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.emailInputRef = React.createRef(); // reference for emailinput
    this.passwodInputRef = React.createRef(); //when we submit form we get the value of input field in attached reference
  }
  // on button click will prevent submit default prop
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.emailInputRef);
    console.log(this.passwodInputRef);
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
            ref={this.emailInputRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            ref={this.passwodInputRef}
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
