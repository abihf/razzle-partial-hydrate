import React, { Component } from 'react'
import { isomorphic } from '@traveloka/fragment/lib/isomorphic';

const Header = isomorphic('header', require('../shared/header'));
const SearchBox = isomorphic('search-box', require('./SearchBox'));

export default class HomePage extends Component {
  static async serverProps() {
    return {}
  }

  static async clientProps() {

  }

  render() {
    return (
      <div>
        <Header title="Home Header" />
        <div>Server only</div>
        <SearchBox />
        <a href="/about">About</a>
      </div>
    )
  }
}
