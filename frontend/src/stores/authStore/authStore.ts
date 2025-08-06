import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TAuthStore } from './authStore.type';
import { initialAuthStoreState } from './authStore.type';

const useAuthStore = create<TAuthStore>()(devtools((set, _get) => ({
  state: { ...initialAuthStoreState },
  actions: {
    setAuthInfo: authInfo => {
      set(origin => {
        origin.state.authInfo = authInfo;

        return origin;
      });
    },
  },
}), {
  name: 'Auth',
}));

export default useAuthStore;
