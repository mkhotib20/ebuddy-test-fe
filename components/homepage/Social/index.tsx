'use client';

import { Alert, Container, Grid } from '@mui/material';
import dynamic from 'next/dynamic';

import useSocialState from '@/hooks/useSocialState';

import InputSection from './InputSection';

// conditionally used, it not rendered if post length is 0

const PostItem = dynamic(() => import('./PostItem'));

const HomePage = () => {
  const { posts } = useSocialState();

  return (
    <Grid xs={12} md={8}>
      <Container sx={{ width: '100%', marginBlock: '32px' }}>
        <InputSection />
        {posts.length === 0 && (
          <div style={{ marginTop: 32 }}>
            <Alert severity="info">No data</Alert>
          </div>
        )}
        {posts.map((post, index) => (
          <PostItem post={post} key={post.id || index} />
        ))}
      </Container>
    </Grid>
  );
};

export default HomePage;
