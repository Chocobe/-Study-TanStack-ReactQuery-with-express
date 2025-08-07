import { useQuery } from '@tanstack/react-query';

import { getTodosApi } from '@/apis/todoApis/todoApis';
import { TGetTodosApiResponse } from '@/apis/todoApis/todoApis.type';
import queryKeyMap from '@/lib/tanstack-query/queryKeyMap';

const useTodosQuery = () => {
  const todosQuery = useQuery({
    queryKey: queryKeyMap.todoApis.getTodos(),
    queryFn: getTodosApi,
    select(response) {
      return response.data ?? [] as TGetTodosApiResponse;
    },
    staleTime: 1_000 * 60 * 5,
    gcTime: 1_000 * 60 * 5,
  });

  return todosQuery;
};

export default useTodosQuery;
