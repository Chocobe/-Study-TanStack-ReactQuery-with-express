import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { postTodoApi } from '@/apis/todoApis/todoApis';
import { TGetTodosApiRequestParams, TGetTodosApiResponse, TTodoModel } from '@/apis/todoApis/todoApis.type';
import queryKeyMap from '@/lib/tanstack-query/queryKeyMap';
import useTodoListPageStore from '@/stores/todoListPageStore/todoListPageStore';

import parseCompletedValue from '../utils/parseCompletedValue';

const usePostTodoMutation = () => {
  const queryClient = useQueryClient();

  const todosQueryParams: TGetTodosApiRequestParams = {
    queryParams: {
      completed: parseCompletedValue('전체'),
    },
  };

  const filterActions = useTodoListPageStore(origin => origin.actions.filterActions);
  const setIsAddMode = useTodoListPageStore(origin => origin.actions.setIsAddMode);

  const postTodoMutation = useMutation({
    mutationKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
    mutationFn: postTodoApi,
    onMutate: async params => {
      await queryClient.cancelQueries({
        queryKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
      });

      const previousTodos = queryClient.getQueryData<TGetTodosApiResponse>(queryKeyMap.todoApis.getTodos(todosQueryParams));

      queryClient.setQueryData<TGetTodosApiResponse>(
        queryKeyMap.todoApis.getTodos(todosQueryParams),
        old => {
          const newTodo: TTodoModel = {
            id: 0,
            content: params.payload.content,
            completed: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };

          return [
            newTodo,
            ...(old ?? []),
          ];
        }
      );

      return { previousTodos };
    },
    onError: (_error, _params, context) => {
      toast.error('에러가 발생하여 할 일을 등록하지 못하였습니다.');

      queryClient.setQueryData(
        queryKeyMap.todoApis.getTodos(todosQueryParams),
        context?.previousTodos
      );
    },
    onSettled: (_, error) => {
      if (!error) {
        filterActions.setCompleted('전체');
        setIsAddMode(false);

        toast.success('새로운 할 일을 등록하였습니다.');

        return queryClient.invalidateQueries({
          queryKey: queryKeyMap.todoApis.getTodos(todosQueryParams),
        });
      }
    },
  });

  return postTodoMutation;
};

export default usePostTodoMutation;
