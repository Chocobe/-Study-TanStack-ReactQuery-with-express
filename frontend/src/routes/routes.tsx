import { RouteObject } from 'react-router';

import LoginPage from '@/pages/LoginPage/LoginPage';
import TodoListPage from '@/pages/TodoListPage/TodoListPage';

import routePathFactory from './routePathFactory';
import PublicRouteGuard from './guards/PublicRouteGuard';
import ProtectedRouteGuard from './guards/ProtectedRouteGuard';
import CommonPageLayout from '@/components/CommonPageLayout/CommonPageLayout';

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
    // element: <ProtectedRouteGuard />,
    element: (
      <CommonPageLayout>
        <ProtectedRouteGuard />
      </CommonPageLayout>
    ),
    children: [
      {
        path: routePathFactory.todoListPage(),
        element: <TodoListPage />,
      },
    ],
  },
];

export default routes;
