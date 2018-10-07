import Axios from "axios";
import { createFetcher } from "@traveloka/fragment";

export default createFetcher({
  name: "comment",
  fetch(id) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    console.log(url)
    return Axios.get(url).then(res => res.data);
  }
});
