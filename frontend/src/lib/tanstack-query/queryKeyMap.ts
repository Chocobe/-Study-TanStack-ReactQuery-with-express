import { TGetTodosApiRequestParams } from '@/apis/todoApis/todoApis.type';

const queryKeyMap = {
  todoApis: {
    getTodos(params: TGetTodosApiRequestParams) {
      return ['todos', params];
    },
  },
};

export default queryKeyMap;
