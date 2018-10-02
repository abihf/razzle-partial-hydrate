export default [
  {
    path: '/',
    exact: true,
    loader: () => import('./home/Home.page'),
  },
  {
    path: '/about',
    exact: true,
    loader: () => import('./about/About.page'),
  },
];
