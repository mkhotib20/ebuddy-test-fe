'use client';

import { useEffect } from 'react';

import { Alert, Container, Grid } from '@mui/material';
import dynamic from 'next/dynamic';

import postFetcher from '@/apis/postFetcher/client';
import useIsIntersect from '@/hooks/useIsIntersect';
import useSocialState from '@/hooks/useSocialState';
import { appendPost } from '@/store/feature/socialSlice';
import { useAppDispatch } from '@/store/hooks';

import InputSection from './InputSection';

// conditionally used, it not rendered if post length is 0

const PostItem = dynamic(() => import('./PostItem'));

const HomePage = () => {
  const { posts, hasNext, page } = useSocialState();
  const dispatch = useAppDispatch();

  const { intersectRef } = useIsIntersect(async () => {
    console.log('intersekkkk');
    const result = await postFetcher(page + 1);
    if (!result?.postData?.length) {
      return;
    }
    dispatch(appendPost({ posts: result.postData, hasNext: Boolean(result.hasNext) }));
  });

  useEffect(() => {
    // for to top every initial load
    window.scrollTo({ top: 0 });
  }, []);

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
        {hasNext && posts.length > 0 && <div ref={intersectRef} />}
      </Container>
    </Grid>
  );
};

export default HomePage;
