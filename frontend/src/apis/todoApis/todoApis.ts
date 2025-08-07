import apiClient from '../apiClient';
import {
  TGetTodosApiResponse,
  TPatchTodoContentApiRequestParams,
  TPatchTodoContentApiResponse,
} from './todoApis.type';
import todoApisUrlFactory from './todoApisUrlFactory';

export const getTodosApi = async () => {
  const response = await apiClient.get<TGetTodosApiResponse>(
    todoApisUrlFactory.getTodosApiUrl()
  );

  return response.data;
};

export const patchTodoContentApi = async ({
  pathParams, 
  payload,
}: TPatchTodoContentApiRequestParams) => {
  const response = await apiClient.patch<TPatchTodoContentApiResponse>(
    todoApisUrlFactory.patchTodoContent(pathParams),
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
