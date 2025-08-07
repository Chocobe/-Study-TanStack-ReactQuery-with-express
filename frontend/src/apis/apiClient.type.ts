type TApiPathParams<T = void> = T extends void
  ? {}
  : { pathParams: T };

type TApiQueryParams<T = void> = T extends void
  ? {}
  : { queryParams: T };

type TApiPayload<T = void> = T extends void
  ? {}
  : { payload: T };

export type TApiRequestParams<
  TPathParams = void,
  TQueryParams = void,
  TPayload = void
> = 
  & TApiPathParams<TPathParams>
  & TApiQueryParams<TQueryParams>
  & TApiPayload<TPayload>;
