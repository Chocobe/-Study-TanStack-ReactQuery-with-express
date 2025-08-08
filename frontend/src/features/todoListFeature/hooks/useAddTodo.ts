import { useEffect, useState } from 'react';

import { postTodoApi } from '@/apis/todoApis/todoApis';
import { TPostTodoApiRequestParams } from '@/apis/todoApis/todoApis.type';
import useTodoListPageStore from '@/stores/todoListPageStore/todoListPageStore';

const useAddTodo = () => {
  const isAddMode = useTodoListPageStore(origin => origin.state.isAddMode);
  const setIsAddMode = useTodoListPageStore(origin => origin.actions.setIsAddMode);

  const [newContent, setNewContent] = useState('');

  // FIXME: useMutation() hook 으로 변경하기
  const onSubmitNewTodo = async (params: TPostTodoApiRequestParams) => {
    const newTodo = await postTodoApi(params);

    console.group('onSubmitNewTodo()');
    console.log('isAddMode: ', isAddMode);
    console.log('newContent: ', newContent);
    console.log('newTodo: ', newTodo);
    console.groupEnd();
  };

  const onCancelNewTodo = () => {
    setIsAddMode(false);
  };

  useEffect(() => {
    if (isAddMode) {
      return () => {
        setNewContent('');
      };
    }
  }, [isAddMode]);

  return {
    isAddMode,
    newContent,
    setNewContent,
    onSubmitNewTodo,
    onCancelNewTodo,
  };
};

export default useAddTodo;
