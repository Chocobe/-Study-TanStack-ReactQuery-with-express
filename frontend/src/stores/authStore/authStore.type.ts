type TAuthStoreState = {
  authInfo: {
    id: number;
    email: string;
    message: string;
  } | null;
};

type TAuthStoreActions = {
  setAuthInfo: (authInfo: TAuthStoreState['authInfo']) => void;
};

export type TAuthStore = {
  state: TAuthStoreState;
  actions: TAuthStoreActions;
};

export const initialAuthStoreState: TAuthStoreState = {
  authInfo: null,
} as const;
