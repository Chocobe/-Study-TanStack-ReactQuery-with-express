import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { initialTodoListPageStoreState, TTodoListPageStore } from './todoListPageStore.type';

const useTodoListPageStore = create<TTodoListPageStore>()(devtools((set, _get) => ({
  state: { ...initialTodoListPageStoreState },
  actions: {
    filterActions: {
      setCompleted: completed => {
        set(old => ({
          ...old,
          state: {
            ...old.state,
            filterState: {
              ...old.state.filterState,
              completed,
            },
          },
        }));
      },
    },

    setIsAddMode: isAddMode => {
      set(old => ({
        ...old,
        state: {
          ...old.state,
          isAddMode,
        },
      }));
    },
  },
}), {
  name: 'TodoListPage',
}));

export default useTodoListPageStore;
