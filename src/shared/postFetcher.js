import Axios from "axios";
import { createFetcher } from "@traveloka/fragment";

export default createFetcher({
  name: "posts",
  fetch(id) {
    const url =
      id === "index"
        ? "https://jsonplaceholder.typicode.com/posts"
        : `https://jsonplaceholder.typicode.com/posts/${id}`;
    return Axios.get(url).then(res => res.data);
  }
});
