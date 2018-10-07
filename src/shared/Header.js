import React from "react";
import { Link } from "@traveloka/fragment";

export default ({ title }) => (
  <header>
    <h1>{title}</h1>
    <ul>
      <li>
        <Link to="/" preload="hover">Home</Link>
      </li>
      <li>
        <Link to="/about" preload="hover">About</Link>
      </li>
    </ul>
    <hr />
  </header>
);
