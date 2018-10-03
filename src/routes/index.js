export default [
  {
    path: '/',
    exact: true,
    loader: () => import('../home/Home.page'),
    fragments: () => import('fragment-loader!../home/Home.page'),
  },
  {
    path: '/about',
    exact: true,
    loader: () => import('../about/About.page'),
    fragments: () => import('fragment-loader!../about/About.page')
  },
];
