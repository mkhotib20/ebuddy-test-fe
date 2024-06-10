import { configureStore } from '@reduxjs/toolkit';

import userDataReducer from './reducers';
import type { AppStorage } from './types';

export const INITIAL_DEFAULT_STORE: AppStorage = {
  userData: {},
};

export const makeStore = (initialUserData: AppStorage) => {
  return configureStore({
    preloadedState: initialUserData,
    reducer: {
      userData: userDataReducer,
    },
  });
};

export const store = makeStore(INITIAL_DEFAULT_STORE);
