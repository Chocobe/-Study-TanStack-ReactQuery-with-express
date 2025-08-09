import apiClient from '../apiClient';
import {
  TGetTodosApiRequestParams,
  TGetTodosApiResponse,
  TPatchTodoContentApiRequestParams,
  TPatchTodoContentApiResponse,
  TPostTodoApiRequestParams,
  TPostTodoApiResponse,
  TToggleTodoCompletedApiRequestParams,
  TToggleTodoCompletedApiResponse,
} from './todoApis.type';
import todoApisUrlFactory from './todoApisUrlFactory';

export const getTodosApi = async ({ queryParams }: TGetTodosApiRequestParams) => {
  const response = await apiClient.get<TGetTodosApiResponse>(
    todoApisUrlFactory.getTodosApiUrl(),
    {
      params: queryParams,
    }
  );

  return response.data;
};

export const patchTodoContentApi = async ({
  pathParams, 
  payload,
}: TPatchTodoContentApiRequestParams) => {
  const response = await apiClient.patch<TPatchTodoContentApiResponse>(
    todoApisUrlFactory.patchTodoContentUrl(pathParams),
    payload
  );

  return response.data;

  // NOTE: error test
  // return new Promise((_, rej) => {
  //   setTimeout(() => {
  //     rej({ message: '롤백 테스트 메시지'});
  //   }, 1_000);
  // });
};

export const toggleTodoCompletedApi = async ({ pathParams }: TToggleTodoCompletedApiRequestParams) => {
  const response = await apiClient.patch<TToggleTodoCompletedApiResponse>(
    todoApisUrlFactory.toggleTodoCompletedUrl(pathParams)
  );

  return response.data;
};

export const postTodoApi = async ({ payload }: TPostTodoApiRequestParams) => {
  const response = await apiClient.post<TPostTodoApiResponse>(
    todoApisUrlFactory.postTodoUrl(),
    payload
  );

  return response.data;
};
