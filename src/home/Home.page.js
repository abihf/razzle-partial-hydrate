import React from 'react';
import Isomorphic from "../utils/Isomorphic";
export default () => (
  <div>
    <Isomorphic name="header" component={require('../shared/header')} />
    <div>Server only</div>
    <Isomorphic name="search-box" component={require('./SearchBox')} />
    <a href="/about">About</a>
  </div>
);
