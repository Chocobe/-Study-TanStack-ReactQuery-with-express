import apiClient from '../apiClient';
import { TGetTodosApiResponse } from './todoApis.type';
import todoApisUrlFactory from './todoApisUrlFactory';

export const getTodosApi = () => {
  return apiClient.get<TGetTodosApiResponse>(
    todoApisUrlFactory.getTodosApiUrl()
  );
};
