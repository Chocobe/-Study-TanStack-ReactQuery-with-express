import { RouteObject } from 'react-router';

import LoginPage from '@/pages/LoginPage/LoginPage';
import TodoListPage from '@/pages/TodoListPage/TodoListPage';

import routePathFactory from './routePathFactory';

const routes: RouteObject[] = [
  {
    path: routePathFactory.loginPage(),
    element: <LoginPage />,
  },
  {
    path: routePathFactory.todoListPage(),
    element: <TodoListPage />,
  },
];

export default routes;
