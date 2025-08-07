import { API_VERSION } from '../apiClient.type';

export const authApisUrlFactory = (() => {
  const BASE_PATH = `${API_VERSION}/auth`;

  return {
    loginApiUrl() {
      return `${BASE_PATH}/login` as const;
    },
  };
})();
