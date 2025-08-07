import apiClient from '../apiClient';
import { 
  TLoginApiRequestParams,
  TLoginApiResponse,
} from './authApis.type';
import { authApisUrlFactory } from './authApis.url';

export const loginApi = (params: TLoginApiRequestParams) => {
  return apiClient.post<TLoginApiResponse>(
    authApisUrlFactory.loginApiUrl(),
    params.payload
  );
};
