'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider, createTheme } from '@mui/material';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: '500',
});

const AppThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: '#027DFC', // Change primary color
          },
          secondary: {
            main: '#f50057', // Change secondary color
          },
        },
        typography: workSans.style,
      })}
    >
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
