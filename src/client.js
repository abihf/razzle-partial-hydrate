import { hydrate } from "@traveloka/fragment/lib/hydrate";
import routes from "./routes";

hydrate({
  routes: routes,
  url: document.location.pathname,
  data: window.__FRAGMENT__,
}).catch(e => console.error(e))

if (module.hot) {
  module.hot.accept();
}
