'use client';

import { PropsWithChildren, useRef } from 'react';

import { Post } from '@/models/post/types';
import { initializePost } from '@/store/feature/socialSlice';
import { useAppStore } from '@/store/hooks';

const PostWrapper = ({ children, postData }: PropsWithChildren<{ postData: Post[] }>) => {
  const store = useAppStore();

  const initialized = useRef(false);

  if (!initialized.current) {
    store.dispatch(initializePost(postData));
    initialized.current = true;
  }

  return <>{children}</>;
};

export default PostWrapper;
