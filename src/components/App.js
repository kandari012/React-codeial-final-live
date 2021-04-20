import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { PostsList, Navbar } from "./";
import propTypes from "prop-types";
import { BrowserRouter as Router, Link, Route } from "react-router-dom"; // use browserrouter as router

// dummy components
const Login = () => <div>Login</div>;
const Home = () => <div>Home</div>;
const SignUp = () => <div>sign</div>;
export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log(this.props);
    return (
      // wrap root component within Router
      <Router>
        <div>
          {/* {Navbar and list will be common in all as it is outside the route} */}
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          <ul>
            <li>
              {/* {using a tag instead of Link will refresh the page and we don,t want that} */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
          {/* {depending on path the component will be rendered but code above this is common in all case} */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: propTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
