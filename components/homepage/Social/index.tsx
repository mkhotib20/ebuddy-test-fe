'use client';

import { useState } from 'react';

import { Container } from '@mui/material';
import dynamic from 'next/dynamic';

import InputSection from './InputSection';

// conditionally used, it not rendered if post length is 0

const PostItem = dynamic(() => import('./PostItem'));

const HomePage = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, name: 'John Doe', pictureUrl: 'url_to_image', timestamp: '2024-06-11T12:00:00Z', text: 'Hello World!' },
    {
      id: 2,
      name: 'Jane Smith',
      pictureUrl: 'url_to_image',
      timestamp: '2024-06-10T12:00:00Z',
      text: 'This is a post!',
    },
  ]);

  return (
    <Container sx={{ width: '100%' }}>
      <InputSection />
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </Container>
  );
};

export default HomePage;
