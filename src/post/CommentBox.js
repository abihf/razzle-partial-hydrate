import React from "react";
import { Fetch } from "@traveloka/fragment";

import { spinner } from "../shared/Spinner";
import commentFetcher from "../shared/commentFetcher";

export default ({ postID }) => (
  <section>
    <h3>Comment</h3>
    <Fetch fetcher={commentFetcher} args={postID}>
      {({ data: comments }) =>
        comments
          ? comments.map(comment => (
              <div key={comment.id}>
                <strong>{comment.email}</strong>
                <div className="commentBody">{comment.body}</div>
              </div>
            ))
          : spinner
      }
    </Fetch>
  </section>
);
