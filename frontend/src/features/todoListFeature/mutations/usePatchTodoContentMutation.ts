import { 
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { patchTodoContentApi } from '@/apis/todoApis/todoApis';
import { TGetTodosApiResponse } from '@/apis/todoApis/todoApis.type';
import queryKeyMap from '@/lib/tanstack-query/queryKeyMap';

const usePatchTodoContentMutation = () => {
  const queryClient = useQueryClient();

  const patchTodoContentMutation = useMutation({
    mutationKey: queryKeyMap.todoApis.getTodos(),
    mutationFn: patchTodoContentApi,
    onMutate: async params => {
      await queryClient.cancelQueries({
        queryKey: queryKeyMap.todoApis.getTodos(),
      });

      const previousTodos = queryClient.getQueryData<TGetTodosApiResponse>(queryKeyMap.todoApis.getTodos());

      queryClient.setQueryData<TGetTodosApiResponse>(
        queryKeyMap.todoApis.getTodos(), 
        old => old?.map(item => {
          return item.id === params.pathParams.id
            ? {
              ...item,
              content: params.payload.content,
            }: item;
        })
      );

      return { previousTodos };
    },
    onError: (_error, _params, context) => {
      queryClient.setQueryData(queryKeyMap.todoApis.getTodos(), context?.previousTodos);
    },
    onSettled: (_, error) => {
      if (!error) {
        return queryClient.invalidateQueries({
          queryKey: queryKeyMap.todoApis.getTodos(),
        });
      }
    },
  });

  return patchTodoContentMutation;
};

export default usePatchTodoContentMutation;
