type TTodoListPageStoreState = {
  filterState: {
    completed: '전체' | '완료' | '미완료';
  };

  isAddMode: boolean;
};

type TTodoListPageStoreActions = {
  filterActions: {
    setCompleted: (completed: TTodoListPageStoreState['filterState']['completed']) => void;
  };

  setIsAddMode: (isAddMode: boolean) => void;
};

export type TTodoListPageStore = {
  state: TTodoListPageStoreState;
  actions: TTodoListPageStoreActions;
};

export const initialTodoListPageStoreState: TTodoListPageStoreState = {
  filterState: {
    completed: '전체',
  },

  isAddMode: false,
} as const;
