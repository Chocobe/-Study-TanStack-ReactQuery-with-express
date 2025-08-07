import apiClient from '../apiClient';
import {
  TGetTodosApiResponse,
  TPatchTodoContentApiRequestParams,
  TPatchTodoContentApiResponse,
} from './todoApis.type';
import todoApisUrlFactory from './todoApisUrlFactory';

export const getTodosApi = () => {
  return apiClient.get<TGetTodosApiResponse>(
    todoApisUrlFactory.getTodosApiUrl()
  );
};

export const patchTodoContentApi = ({
  pathParams, 
  payload,
}: TPatchTodoContentApiRequestParams) => {
  return apiClient.patch<TPatchTodoContentApiResponse>(
    todoApisUrlFactory.patchTodoContent(pathParams),
    payload
  );
};
