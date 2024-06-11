import { Grid } from '@mui/material';

import postFetcher from '@/apis/postFetcher';
import UserInformation from '@/components/homepage/Profile/UserInformation';
import SocialSection from '@/components/homepage/Social';
import PostWrapper from '@/components/homepage/Social/PostWrapper';

const HomePage = async () => {
  const { postData } = await postFetcher();

  return (
    <PostWrapper postData={postData || []}>
      <Grid justifyContent="center" container spacing={2}>
        <UserInformation />
        <SocialSection />
      </Grid>
    </PostWrapper>
  );
};

export default HomePage;
