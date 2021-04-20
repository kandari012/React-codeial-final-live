import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { PostsList, Navbar, Home, Page404 } from "./";
import propTypes from "prop-types";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"; // use browserrouter as router

// dummy components
const Login = () => <div>Login</div>;
// when we render component with route react passes some porops to the components ex:history,location,match,etc
const SignUp = (props) => {
  console.log(props);
  return <div>sign</div>;
};
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
          <Switch>
            {/* {will render only one component which matches the link from top to botton in route} */}
            <Route
              exact
              path="/"
              //  {render will be used when we need to pass extra props and also pass props to the comp else default props will not be present in componentthese props will be passed by react router }
              render={(props) => {
                return <Home posts={posts} {...props} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            {/* {will be called if no other path matches } */}
            <Route component={Page404} />
          </Switch>
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
