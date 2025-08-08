import useTodoListPageStore from '@/stores/todoListPageStore/todoListPageStore';

const useTodoListActions = () => {
  const filterState = useTodoListPageStore(origin => origin.state.filterState);
  const filterActions = useTodoListPageStore(origin => origin.actions.filterActions);

  const onClickAddButton = () => {
    console.log('onClickAddButton()');
  };

  return {
    filterState,
    filterActions,
    onClickAddButton,
  };
};

export default useTodoListActions;
