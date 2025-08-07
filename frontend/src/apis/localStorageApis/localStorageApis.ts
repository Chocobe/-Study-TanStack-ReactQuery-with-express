import { localStorageKeyMap, TLocalStorageToken } from './localStorageApis.type';

const localStorageApis = {
  [localStorageKeyMap.AUTH_TOKEN]: {
    set(token: TLocalStorageToken) {
      localStorage.setItem(localStorageKeyMap.AUTH_TOKEN, JSON.stringify(token));
    },
    get() {
      const token = localStorage.getItem(localStorageKeyMap.AUTH_TOKEN);

      return token
        ? JSON.parse(token) as TLocalStorageToken
        : null;
    },
  },
};

export default localStorageApis;
