import { Grid } from '@mui/material';

import SocialSection from '@/components/homepage/Social';
import UserInformation from '@/components/homepage/UserInformation';

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={4}>
        <UserInformation />
      </Grid>
      <Grid xs={12} md={8}>
        <SocialSection />
      </Grid>
    </Grid>
  );
};

export default HomePage;
