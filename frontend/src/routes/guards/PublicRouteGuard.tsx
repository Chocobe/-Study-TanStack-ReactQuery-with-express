import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

import useAuthStore from '@/stores/authStore/authStore';

import routePathFactory from '../routePathFactory';

function PublicRouteGuard() {
  const [isChecked, setIsChecked] = useState(false);

  const authInfo = useAuthStore(origin => origin.state.authInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (authInfo) {
      navigate(routePathFactory.todoListPage());
      return;
    }

    setIsChecked(true);
  }, [authInfo, navigate]);

  if (!isChecked) {
    return null;
  }

  return <Outlet />;
}

export default PublicRouteGuard;
