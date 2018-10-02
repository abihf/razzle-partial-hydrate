import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import routes from "./routes";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

async function render(req, res, context) {
  
  const currentRoute = routes
    .find(route => matchPath(req.url, route));
  
  const Component = (await currentRoute.loader()).default;
  
  return renderToString(
    <StaticRouter context={context} location={req.url}>
      <Component />
    </StaticRouter>
  );
}

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};

    render(req, res, context).then((markup) => {
      if (context.url) {
        res.redirect(context.url);
      } else {
        res.status(200).send(
          `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
          }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
        );
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  });

export default server;