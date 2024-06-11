import { PropsWithChildren } from 'react';

import { Box, Container } from '@mui/material';

import Header from '@/components/Header';

const PageLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{children}</Box>
      </Container>
    </>
  );
};

export default PageLayout;
