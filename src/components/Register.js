import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Register</span>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <input type="string" placeholder="name" required />
        </div>
        <div className="field">
          <button>Register</button>
        </div>
      </form>
    );
  }
}

export default Register;
