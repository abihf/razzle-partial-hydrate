import React from "react";
const Loading = () => <div>Loading</div>;

export default [
  {
    path: "/",
    exact: true,
    loader: () => import(/* webpackChunkName: "home" */ "../home/HomePage"),
    fragments: () =>
      import(/* webpackChunkName: "home-fragment" */ "fragment-loader!../home/HomePage")
  },
  {
    path: "/about",
    exact: true,
    loader: () => import(/* webpackChunkName: "about" */ "../about/AboutPage"),
    fragments: () =>
      import(/* webpackChunkName: "about-fragment" */ "fragment-loader!../about/AboutPage")
  },
  {
    path: "/post/:id",
    exact: true,
    loader: () =>
      import(/* webpackChunkName: "post" */ "../post/SinglePostPage"),
    fragments: () =>
      import(/* webpackChunkName: "post-fragment" */ "fragment-loader!../post/SinglePostPage")
  }
].map(route => {
  route.loading = Loading;
  return route;
});
