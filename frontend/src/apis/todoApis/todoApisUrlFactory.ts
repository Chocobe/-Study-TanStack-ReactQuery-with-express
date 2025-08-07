import { API_VERSION } from '../apiClient.type';
import { TPatchTodoContentApiRequestParams } from './todoApis.type';

const todoApisUrlFactory = (() => {
  const BASE_PATH = `${API_VERSION}/todo`;

  return {
    getTodosApiUrl() {
      return `${BASE_PATH}` as const;
    },

    patchTodoContent({ id }: TPatchTodoContentApiRequestParams['pathParams']) {
      return `${BASE_PATH}/${id}` as const;
    },
  };
})();

export default todoApisUrlFactory;
