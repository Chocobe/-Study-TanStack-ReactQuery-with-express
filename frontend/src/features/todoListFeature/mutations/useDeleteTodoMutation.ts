import { useMutation,useQueryClient } from '@tanstack/react-query';

import { deleteTodoApi } from '@/apis/todoApis/todoApis';
import { TGetTodosApiRequestParams, TGetTodosApiResponse } from '@/apis/todoApis/todoApis.type';
import queryKeyMap from '@/lib/tanstack-query/queryKeyMap';
import useTodoListPageStore from '@/stores/todoListPageStore/todoListPageStore';

import parseCompletedValue from '../utils/parseCompletedValue';

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  const filterState = useTodoListPageStore(origin => origin.state.filterState);

  const todosQueryParams: TGetTodosApiRequestParams = {
    queryParams: {
      completed: parseCompletedValue(filterState.completed),
    },
  };

  const deleteTodoMutation = useMutation({
    mutationKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
    mutationFn: deleteTodoApi,
    onMutate: async params => {
      await queryClient.cancelQueries({
        queryKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
      });

      const previousTodos = queryClient.getQueryData<TGetTodosApiResponse>(queryKeyMap.todoApis.getTodos(todosQueryParams));

      queryClient.setQueryData<TGetTodosApiResponse>(
        queryKeyMap.todoApis.getTodos(todosQueryParams),
        old => old?.filter(item => {
          return item.id !== params.pathParams.id;
        })
      );

      return { previousTodos };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(
        queryKeyMap.todoApis.getTodos(todosQueryParams),
        context?.previousTodos
      );
    },
    onSettled: (_, error) => {
      if (!error) {
        return queryClient.invalidateQueries({
          queryKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
        });
      }
    },
  });

  return deleteTodoMutation;
};

export default useDeleteTodoMutation;
