import React from 'react';
import Isomorphic from "../utils/Isomorphic";
export default () => (
  <div>
    <Isomorphic name='header' component={require('../shared/header')} />
    <div>About page</div>
    <a href="/">Home</a>
  </div>
);
