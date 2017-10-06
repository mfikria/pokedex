import FeedPage from './FeedPage';
import DetailPage from './DetailPage';
import NotFoundPage from './NotFoundPage';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: FeedPage,
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon detail',
    component: DetailPage,
  },
  {
    name: 'not found',
    component: NotFoundPage,
  }
];

export default routes;
