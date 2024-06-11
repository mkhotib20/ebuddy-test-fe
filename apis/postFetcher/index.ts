'server only';

import baseFetcher from '../baseFetcher/server';
import { PostDataResponse } from './types';

const postFetcher = async () => {
  const result = await baseFetcher<PostDataResponse>('/api/homepage-post', {
    next: { tags: ['post-home'] },
  });

  return {
    postData: result.data?.data,
    postError: result.error,
  };
};

export default postFetcher;
