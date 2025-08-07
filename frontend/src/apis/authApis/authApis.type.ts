import { TApiRequestParams } from '../apiClient.type';

export type TLoginApiRequestParams = TApiRequestParams<void, void, {
  email: string;
  password: string;
}>;

export type TLoginApiResponse = {
  id: number;
  email: string;
  message: string;
};
