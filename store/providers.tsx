'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from './store';
import type { AppStorage } from './types';

interface UserDataProviderProps {
  initialStore?: AppStorage;
}

const UserDataProvider = ({ children, initialStore }: PropsWithChildren<UserDataProviderProps>) => {
  return <Provider store={makeStore(initialStore || { userData: {} })}>{children}</Provider>;
};

export default UserDataProvider;
