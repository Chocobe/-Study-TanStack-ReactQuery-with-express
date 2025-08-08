type TTodoListPageStoreState = {
  filterState: {
    completed: '전체' | '완료' | '미완료';
  };
};

type TTodoListPageStoreActions = {
  filterActions: {
    setCompleted: (completed: TTodoListPageStoreState['filterState']['completed']) => void;
  };
};

export type TTodoListPageStore = {
  state: TTodoListPageStoreState;
  actions: TTodoListPageStoreActions;
};

export const initialTodoListPageStoreState: TTodoListPageStoreState = {
  filterState: {
    completed: '전체',
  },
} as const;
