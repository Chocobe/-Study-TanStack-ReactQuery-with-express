import { useNavigate } from 'react-router';

import localStorageApis from '@/apis/localStorageApis/localStorageApis';
import routePathFactory from '@/routes/routePathFactory';
import useAuthStore from '@/stores/authStore/authStore';

const useLogoutButton = () => {
  const setAuthInfo = useAuthStore(origin => origin.actions.setAuthInfo);

  const navigate = useNavigate();

  const onLogout = () => {
    localStorageApis.token.set(null);
    setAuthInfo(null);

    navigate(routePathFactory.loginPage(), {
      replace: true,
    });
  };

  return {
    onLogout,
  };
};

export default useLogoutButton;
