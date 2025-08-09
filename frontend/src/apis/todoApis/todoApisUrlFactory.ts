import { API_VERSION } from '../apiClient.type';
import { TPatchTodoContentApiRequestParams, TToggleTodoCompletedApiRequestParams } from './todoApis.type';

const todoApisUrlFactory = (() => {
  const BASE_PATH = `${API_VERSION}/todo`;

  return {
    getTodosApiUrl() {
      return `${BASE_PATH}` as const;
    },

    patchTodoContentUrl({ id }: TPatchTodoContentApiRequestParams['pathParams']) {
      return `${BASE_PATH}/${id}` as const;
    },

    toggleTodoCompletedUrl(params: TToggleTodoCompletedApiRequestParams['pathParams']) {
      return `${this.patchTodoContentUrl(params)}/toggle` as const;
    },

    postTodoUrl() {
      return this.getTodosApiUrl();
    },
  };
})();

export default todoApisUrlFactory;
