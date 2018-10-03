import express from 'express';
import { render } from "@traveloka/fragment";
import routes from "./routes";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {

    render({url: req.url, routes, template }).then(({ html, redirectUrl }) => {
      if (redirectUrl) {
        res.redirect(redirectUrl);
      } else {
        res.status(200).send(html);
      }
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send(e.stack);
    });
  });

function template({ content, data }) {
  return `<!doctype html>
  <html lang="">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Welcome to Razzle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${ assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ''
    } 
  </head>
  <body>
    <div id="root">${content}</div>
    <script>var __FRAGMENT__=${JSON.stringify(data)}</script>
    ${ process.env.NODE_ENV === 'production'
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
  </body>
</html>`
}

export default server;
