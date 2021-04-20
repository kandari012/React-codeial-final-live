import React, { Component } from "react";
import { PostsList } from ".";

export class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Home;
