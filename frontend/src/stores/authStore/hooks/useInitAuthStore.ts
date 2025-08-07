import { useLayoutEffect, useState } from 'react';

import localStorageApis from '@/apis/localStorageApis/localStorageApis';

import useAuthStore from '../authStore';


const useInitAuthStore = () => {
  const [isReady, setIsReady] = useState(false);

  const setAuthInfo = useAuthStore(origin => origin.actions.setAuthInfo);

  useLayoutEffect(() => {
    const token = localStorageApis.token.get();

    if (token) {
      setAuthInfo(token);
    }

    setIsReady(true);
  }, [setAuthInfo]);

  return {
    isReady,
  };
};

export default useInitAuthStore;
