import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { matchPath } from 'react-router-dom';

import routes from "./routes";

routes
  .find(route => matchPath(document.location.pathname, route))
  .loader()
  .then(data => {
    data = data.default || data;
    Object.keys(data).forEach(name => {
      const component = data[name];
      const Comp = component.default || component
      hydrate(<BrowserRouter><Comp /></BrowserRouter>, document.getElementById(name));
    })
  })
  .catch(e => console.error(e));


if (module.hot) {
  module.hot.accept();
}
