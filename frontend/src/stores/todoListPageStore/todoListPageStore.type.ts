type TTodoListPageStoreState = {
  filterState: {
    completed: boolean;
  };
};

type TTodoListPageStoreActions = {
  filterActions: {
    toggleCompleted: () => void;
  };
};

export type TTodoListPageStore = {
  state: TTodoListPageStoreState;
  actions: TTodoListPageStoreActions;
};

export const initialTodoListPageStoreState: TTodoListPageStoreState = {
  filterState: {
    completed: false,
  },
} as const;
