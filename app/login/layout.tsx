import { PropsWithChildren } from 'react';

import { Grid } from '@mui/material';

const PageLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Grid container component="main" style={{ height: '100vh' }}>
      {children}
    </Grid>
  );
};

export default PageLayout;
