import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './feature/profileSlice';
import type { AppStorage } from './types';

export const INITIAL_DEFAULT_STORE: AppStorage = {
  profile: {
    userData: {},
    editing: false,
    profileName: '',
  },
};

export const makeStore = (initialUserData: AppStorage) => {
  return configureStore({
    preloadedState: initialUserData,
    reducer: {
      profile: profileReducer,
    },
  });
};

export const store = makeStore(INITIAL_DEFAULT_STORE);
