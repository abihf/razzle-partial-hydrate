import React from 'react';
import { isomorphic } from '@traveloka/fragment/lib/isomorphic';
import { Fetch } from "@traveloka/fragment/lib/Fetch";
import userFetcher from "../shared/userFetcher";

const Header = isomorphic('header', require('../shared/header'));

export default () => (
  <div>
    <Header title="About Header" />
    <div>About page</div>
    <a href="/">Home</a>
    <Fetch fetcher={userFetcher} id={'abi'}>
      { ({ data }) => data || null }
    </Fetch>
  </div>
);
