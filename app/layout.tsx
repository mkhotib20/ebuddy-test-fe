import { PropsWithChildren } from 'react';

import { CssBaseline } from '@mui/material';
import type { Metadata } from 'next';

import userDataFetcher from '@/apis/userFetcher';
import StoreProvider from '@/store/providers/StoreProvider';
import AppThemeProvider from '@/theme/Provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Ebuddy Social',
  description: 'Meet your buddy online',
};

const RootLayout = async ({ children }: PropsWithChildren<unknown>) => {
  const { userData } = await userDataFetcher();

  return (
    <html lang="en">
      <CssBaseline />
      <body>
        <AppThemeProvider>
          <StoreProvider
            initialStore={{
              profile: { userData: userData || {}, profileName: userData?.name || '' },
              social: { posts: [] },
            }}
          >
            {children}
          </StoreProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
