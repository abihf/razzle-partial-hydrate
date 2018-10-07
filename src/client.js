import { initClient } from "@traveloka/fragment";
import routes from "./routes";

initClient({
  rootElement: document.getElementById('root'),
  routes,
  url: document.location.pathname,
  data: window.__FRAGMENT__,
}).catch(e => console.error(e))

if (module.hot) {
  module.hot.accept();
}
