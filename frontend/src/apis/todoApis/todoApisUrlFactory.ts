import { API_VERSION } from '../apiClient.type';
import { TDeleteTodoApiRequestParams, TPatchTodoContentApiRequestParams, TToggleTodoCompletedApiRequestParams } from './todoApis.type';

const todoApisUrlFactory = (() => {
  const BASE_PATH = `${API_VERSION}/todo`;

  return {
    getTodosApiUrl() {
      return `${BASE_PATH}` as const;
    },

    patchTodoContentApiUrl({ id }: TPatchTodoContentApiRequestParams['pathParams']) {
      return `${BASE_PATH}/${id}` as const;
    },

    toggleTodoCompletedApiUrl(pathParams: TToggleTodoCompletedApiRequestParams['pathParams']) {
      return `${this.patchTodoContentApiUrl(pathParams)}/toggle` as const;
    },

    postTodoApiUrl() {
      return this.getTodosApiUrl();
    },

    deleteTodoApiUrl(pathParams: TDeleteTodoApiRequestParams['pathParams']) {
      return this.patchTodoContentApiUrl(pathParams);
    },
  };
})();

export default todoApisUrlFactory;
