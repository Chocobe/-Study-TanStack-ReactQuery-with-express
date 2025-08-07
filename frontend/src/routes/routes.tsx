import { Navigate, RouteObject } from 'react-router';

import ProtectedPageLayout from '@/layouts/ProtectedPageLayout/ProtectedPageLayout';
import LoginPage from '@/pages/LoginPage/LoginPage';
import TodoListPage from '@/pages/TodoListPage/TodoListPage';

import ProtectedRouteGuard from './guards/ProtectedRouteGuard';
import PublicRouteGuard from './guards/PublicRouteGuard';
import routePathFactory from './routePathFactory';

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
    element: (
      <ProtectedPageLayout>
        <ProtectedRouteGuard />
      </ProtectedPageLayout>
    ),
    children: [
      {
        path: routePathFactory.todoListPage(),
        element: <TodoListPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={routePathFactory.loginPage()} />,
  },
];

export default routes;
