import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Fetch, Head, isomorphic } from "@traveloka/fragment";

import postFetcher from "../shared/postFetcher";
import { spinner } from "../shared/Spinner";

const Header = isomorphic("header", require("../shared/Header"));
const CommentBox = isomorphic("comment-box", require("./CommentBox"));

class SinglePostPage extends Component {
  render() {
    const postID = this.props.match.params.id;

    return (
      <div>
        <Header title="Post Page" />
        <article>
          <Fetch fetcher={postFetcher} args={postID}>
            {({ data: post }) =>
              post ? (
                <Fragment>
                  <Head>
                    <title>{post.title}</title>
                    <meta name="description" content="Post Page" />
                  </Head>

                  <h2>{post.title}</h2>
                  <div>{post.body}</div>
                </Fragment>
              ) : (
                spinner
              )
            }
          </Fetch>
          <section className="comment">
            <CommentBox postID={postID} />
          </section>
        </article>
      </div>
    );
  }
}

export default withRouter(SinglePostPage);
