import React from "react";
import { Fetch, Link } from "@traveloka/fragment";
import postFetcher from "../shared/postFetcher";
import { spinner } from "../shared/Spinner";

export default () => (
  <Fetch fetcher={postFetcher} args="index">
    {({ data: posts }) => 
      posts
        ? posts.map(post => (
            <article key={post.id}>
              <h3><Link to={`/post/${post.id}`} preload="hover">{post.title}</Link></h3>
              <div>{post.body}</div>
            </article>
          ))
        : spinner
    }
  </Fetch>
);
