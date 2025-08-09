import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { toggleTodoCompletedApi } from '@/apis/todoApis/todoApis';
import { TGetTodosApiRequestParams, TGetTodosApiResponse } from '@/apis/todoApis/todoApis.type';
import queryKeyMap from '@/lib/tanstack-query/queryKeyMap';
import useTodoListPageStore from '@/stores/todoListPageStore/todoListPageStore';

import parseCompletedValue from '../utils/parseCompletedValue';

const useToggleTodoCompletedMutation = () => {
  const queryClient = useQueryClient();

  const filterState = useTodoListPageStore(origin => origin.state.filterState);

  const todosQueryParams: TGetTodosApiRequestParams = {
    queryParams: {
      completed: parseCompletedValue(filterState.completed),
    },
  };

  const toggleTodoCompletedMutation = useMutation({
    mutationKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
    mutationFn: toggleTodoCompletedApi,
    onMutate: async params => {
      await queryClient.cancelQueries({
        queryKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
      });

      const previousTodos = queryClient.getQueryData<TGetTodosApiResponse>(queryKeyMap.todoApis.getTodos(todosQueryParams));

      queryClient.setQueryData<TGetTodosApiResponse>(
        queryKeyMap.todoApis.getTodos(todosQueryParams),
        old => old?.map(item => {
          return item.id === params.pathParams.id
            ? {
              ...item,
              completed: !item.completed,
            }: item;
        })
      );

      return { previousTodos };
    },
    onError: (_error, _params, context) => {
      toast.error('에러가 발생하여서 할 일을 완료 처리하지 못하였습니다.');

      queryClient.setQueryData(
        queryKeyMap.todoApis.getTodos(todosQueryParams),
        context?.previousTodos
      );
    },
    onSettled: (_, error) => {
      if (!error) {
        toast.success('할 일을 완료 처리하였습니다.');

        return queryClient.invalidateQueries({
          queryKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
        });
      }
    },
  });

  return toggleTodoCompletedMutation;
};

export default useToggleTodoCompletedMutation;
