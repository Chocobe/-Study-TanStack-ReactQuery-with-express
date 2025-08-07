import { RouteObject } from 'react-router';

import LoginPage from '@/pages/LoginPage/LoginPage';
import TodoListPage from '@/pages/TodoListPage/TodoListPage';

import routePathFactory from './routePathFactory';
import PublicRouteGuard from './guards/PublicRouteGuard';

const routes: RouteObject[] = [
  {
    element: <PublicRouteGuard />,
    children: [
      {
        path: routePathFactory.loginPage(),
        element: <LoginPage />,
      },
    ],
  },
  {
    path: routePathFactory.todoListPage(),
    element: <TodoListPage />,
  },
];

export default routes;
