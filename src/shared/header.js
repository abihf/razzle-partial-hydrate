import React from 'react';
import { Fetch } from "@traveloka/fragment/lib/Fetch";
import userFetcher from "./userFetcher";

export default ({title}) => (
  <header>
    <h1>{title}</h1> 
    <Fetch fetcher={userFetcher} id={'abi'}>
      { ({ data }) => data || null }
    </Fetch>
  </header>
)
