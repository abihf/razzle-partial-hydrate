import React from "react";
import { isomorphic } from "@traveloka/fragment";

const Header = isomorphic("header", require("../shared/Header"));

export default () => (
  <div>
    <div>
      <Header title="About Page" />
    </div>
  </div>
);
