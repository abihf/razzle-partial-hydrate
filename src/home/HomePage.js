import React, { Component } from "react";
import { Head, isomorphic } from "@traveloka/fragment";
import PostList from "./PostList";

const Header = isomorphic("header", require("../shared/Header"));
// const SearchBox = isomorphic("search-box", require("./SearchBox"));

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home Page" />
        </Head>

        <Header title="Home Page" />

        <h2>Welcome</h2>
        <PostList />
      </div>
    );
  }
}
