import { useQuery } from '@tanstack/react-query';

import { getTodosApi } from '@/apis/todoApis/todoApis';
import { TGetTodosApiRequestParams } from '@/apis/todoApis/todoApis.type';
import queryKeyMap from '@/lib/tanstack-query/queryKeyMap';

const useTodosQuery = (params: TGetTodosApiRequestParams) => {
  const todosQuery = useQuery({
    queryKey: queryKeyMap.todoApis.getTodos(params),
    queryFn: () => getTodosApi(params),
    staleTime: 1_000 * 60 * 5,
    gcTime: 1_000 * 60 * 5,
  });

  return todosQuery;
};

export default useTodosQuery;
