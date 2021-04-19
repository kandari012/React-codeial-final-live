import React, { Component } from "react";
import { connect } from "react-redux";

export class App extends Component {
  render() {
    console.log(this.props);
    return <div>App</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
