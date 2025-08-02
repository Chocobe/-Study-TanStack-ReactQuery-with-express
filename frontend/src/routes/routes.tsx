import { RouteObject } from 'react-router';

import HomePage from '@/pages/HomePage/HomePage';
import TodoListPage from '@/pages/TodoListPage/TodoListPage';

import routePathFactory from './routePathFactory';

const routes: RouteObject[] = [
  {
    path: routePathFactory.homePage(),
    element: <HomePage />,
  },
  {
    path: routePathFactory.todoListPage(),
    element: <TodoListPage />,
  },
];

export default routes;
