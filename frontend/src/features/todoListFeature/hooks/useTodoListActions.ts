import useTodoListPageStore from '@/stores/todoListPageStore/todoListPageStore';

const useTodoListActions = () => {
  const filterState = useTodoListPageStore(origin => origin.state.filterState);
  const filterActions = useTodoListPageStore(origin => origin.actions.filterActions);

  const isAddMode = useTodoListPageStore(origin => origin.state.isAddMode);
  const setIsAddMode = useTodoListPageStore(origin => origin.actions.setIsAddMode);

  const onClickAddButton = () => {
    setIsAddMode(!isAddMode);
  };

  return {
    filterState,
    filterActions,
    onClickAddButton,
  };
};

export default useTodoListActions;
