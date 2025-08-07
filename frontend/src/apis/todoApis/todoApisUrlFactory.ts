import { API_VERSION } from '../apiClient.type';

const todoApisUrlFactory = (() => {
  const BASE_PATH = `${API_VERSION}/todo`;

  return {
    getTodosApiUrl() {
      return `${BASE_PATH}` as const;
    },
  };
})();

export default todoApisUrlFactory;
