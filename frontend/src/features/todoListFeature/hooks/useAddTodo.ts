import { useEffect, useState } from 'react';

import useTodoListPageStore from '@/stores/todoListPageStore/todoListPageStore';

const useAddTodo = () => {
  const isAddMode = useTodoListPageStore(origin => origin.state.isAddMode);
  const setIsAddMode = useTodoListPageStore(origin => origin.actions.setIsAddMode);

  const [newContent, setNewContent] = useState('');

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
    onCancelNewTodo,
  };
};

export default useAddTodo;
