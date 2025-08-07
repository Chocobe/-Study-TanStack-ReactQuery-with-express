export const localStorageKeyMap = {
  AUTH_TOKEN: 'token',
} as const;

export type TLocalStorageToken = {
  id: number;
  email: string;
  message: string;
};